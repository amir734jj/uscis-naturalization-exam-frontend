import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterialUtility} from '../../utilities/material.utility';
import {LearningService} from '../../services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  private static item: { question: string; answer: string, index: number } = null;

  timeLine: Array<typeof LearningComponent.item> = [];
  currentTrack: typeof LearningComponent.item = { question: '', answer: '', index: -1 };
  index = 0;
  randomize = false;
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  private binderAudioRefListener = false;
  playing = false;
  progressBarValue: { max: number, value: number} = { max: 100, value: 0 };

  repeatCount: {
    options: number[],
    total: number,
    soFar: number,
  } = {
    options: [1, 2, 3],
    total: 3,
    soFar: 1
  };

  constructor(private materialUtility: MaterialUtility, private learningService: LearningService) {
    this.materialUtility = materialUtility;
    this.learningService = learningService;
  }

  ngOnInit() {
    if (!this.binderAudioRefListener) {
      this.audioPlayerRef.nativeElement.addEventListener('ended', () => {
        this.repeatCount.soFar++;

        if (this.repeatCount.soFar >= this.repeatCount.total) {
          this.resetProgressBar();
          this.nextTrack();
        } else {
          this.updateProgressBar();
          this.resetTrack();
        }
      }, false);

      this.binderAudioRefListener = true;
    }

    this.nextTrack();
    this.stopTrack();
    this.updateProgressBar();
  }

  previousTrack() {
    if (this.index - 1 >= 0) {
      this.index--;
      this.currentTrack = this.timeLine[this.index];
      this.stopTrack();
      this.loadTrack();
      this.playTrack();
    }
  }

  nextTrack() {
    if (this.timeLine.length === 0) {
      this.currentTrack = this.materialUtility.randomItemInRange(-1);
      this.timeLine.push(this.currentTrack);
    } else if (this.index  === this.timeLine.length || this.index + 1 === this.timeLine.length) {
      this.timeLine.push(this.currentTrack);
      this.currentTrack = this.materialUtility
        .randomItemInRange(!this.randomize && this.currentTrack ? this.currentTrack.index : undefined);
      this.index++;
    } else if (this.index + 1 < this.timeLine.length) {
      this.index++;
      this.currentTrack = this.timeLine[this.index];
    }

    const indices = this.timeLine.map(obj => obj.index);
    this.timeLine = this.timeLine.filter((v, i) => indices.indexOf(v.index) === i);

    this.repeatCount.soFar = 0;
    this.stopTrack();
    this.loadTrack();
    this.playTrack();
  }

  itemToStreamUrl(item: typeof LearningComponent.item) {
    return this.learningService.toStreamUrl(item.index + 1);
  }

  itemToImageUrl(item: typeof LearningComponent.item) {
    const correctedIndex = item.index + 1;
    const frontIndex = 2 * correctedIndex - 1;
    const backIndex = 2 * correctedIndex;

    return {
      front: this.learningService.toImageUrl(frontIndex),
      back: this.learningService.toImageUrl(backIndex)
    };
  }

  loadTrack(): void {
    this.audioPlayerRef.nativeElement.load();
  }

  playTrack(): void {
    this.playing = true;
    this.audioPlayerRef.nativeElement.play();
  }

  stopTrack(): void {
    this.playing = false;
    this.audioPlayerRef.nativeElement.pause();
  }

  toggleTrack() {
    if (this.playing) {
      this.stopTrack();
    } else {
      this.playTrack();
    }
  }

  toggleRandomizeTracks(){
   this.randomize = !this.randomize;
  }

  async downloadTrack() {
    await this.learningService.downloadTrack(this.currentTrack.index + 1);
  }

  resetTrack() {
    this.stopTrack();
    this.audioPlayerRef.nativeElement.currentTime = 0;
    this.playTrack();
  }

  toggleRepeatCount() {
    const index = this.repeatCount.options.indexOf(this.repeatCount.total) + 1;
    this.repeatCount.total = this.repeatCount.options[index % this.repeatCount.options.length];
  }

  updateProgressBar() {
    const correctedScale = this.repeatCount.soFar;
    this.progressBarValue.value = Math.floor((correctedScale / this.repeatCount.total) * 100);
    this.progressBarValue.value = this.progressBarValue.value > this.progressBarValue.max ?
      this.progressBarValue.max : this.progressBarValue.value;
  }

  resetProgressBar() {
    this.progressBarValue.value = 0;
  }
}
