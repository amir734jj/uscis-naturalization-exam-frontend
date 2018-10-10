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
  private currentTrack: typeof LearningComponent.item = { question: '', answer: '', index: -1 };
  private index = 0;
  private randomize = false;
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  private binderAudioRefListener = false;
  private playing = false;

  constructor(private materialUtility: MaterialUtility, private learningService: LearningService) {
    this.materialUtility = materialUtility;
    this.learningService = learningService;
    this.nextTrack();
  }

  ngOnInit() {
    if (!this.binderAudioRefListener) {
      this.audioPlayerRef.nativeElement.addEventListener('ended', () => {
        this.nextTrack();
      }, false);

      this.binderAudioRefListener = true;
    }
  }

  previousTrack() {
    if (this.index - 1 >= 0) {
      this.index--;
      this.currentTrack = this.timeLine[this.index];
    }
  }

  nextTrack() {
    if (this.timeLine.length === 0) {
      this.currentTrack = this.materialUtility.randomItemInRange(-1);
      this.timeLine.push(this.currentTrack);
    } else if (this.timeLine.length !== 0 && this.index < this.timeLine.length - 1) {
      this.timeLine.push(this.currentTrack);
      this.currentTrack = this.materialUtility
        .randomItemInRange(!this.randomize && this.currentTrack ? this.currentTrack.index : undefined);
    } else {
      this.index++;
      this.currentTrack = this.timeLine[this.index];
    }
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

  log() {
    return JSON.stringify(this.currentTrack);
  }

  async downloadTrack() {
    await this.learningService.downloadTrack(this.currentTrack.index + 1);
  }
}
