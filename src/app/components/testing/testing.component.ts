import {Component, OnInit} from '@angular/core';
import {MaterialUtility} from '../../utilities/material.utility';
import {MultipleChoiceAnswer, MultipleChoiceQuestion} from '../../models/MultipleChoice';
import {ResponseTypeEnum} from '../../models/ResponseTypeEnum';
import {TestingService} from '../../services/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  responseTypeEnum: typeof ResponseTypeEnum = ResponseTypeEnum;
  private currentTimeLineIndex = 0;
  timeLine: Array<MultipleChoiceAnswer> = [];
  question: MultipleChoiceQuestion;
  private answer: MultipleChoiceAnswer = {
    questionRef: null,
    answerVal: '',
    result: false,
    index: -1
  };
  private materialUtility: MaterialUtility;
  private testingService: TestingService;

  constructor(materialUtility: MaterialUtility, testingService: TestingService) {
    this.materialUtility = materialUtility;
    this.testingService = testingService;
    this.nextQuestion().then();
  }

  ngOnInit() {
  }

  previousQuestion() {
    if (this.currentTimeLineIndex > 0) {
      this.currentTimeLineIndex--;
    }

    if (this.currentTimeLineIndex >= 0 && this.timeLine.length > this.currentTimeLineIndex) {
      this.question = this.timeLine[this.currentTimeLineIndex].questionRef;
      this.answer = this.timeLine[this.currentTimeLineIndex];
    }
  }

  async nextQuestion() {
    if (this.currentTimeLineIndex < this.timeLine.length && this.currentTimeLineIndex + 1 < this.timeLine.length) {
      this.currentTimeLineIndex++;

      this.question = this.timeLine[this.currentTimeLineIndex].questionRef;
      this.answer = this.timeLine[this.currentTimeLineIndex];
    } else {
      if (this.question && this.question.answer !== '') {
        this.timeLine.push(this.answer);
      }

      // Update the score
      await this.updateScoreApi();

      // Set the question pointer
      this.question = this.materialUtility.getRandomQuestion();
      this.answer = {
        questionRef: this.question,
        answerVal: '',
        result: false,
        index: -1
      };
      this.currentTimeLineIndex = this.timeLine.length - 1;
    }
  }

  validateAnswer(answer: string) {
    if (this.answer && this.answer.answerVal !== '') {
      return this.answer.result;
    } else {
      // Hold on to the answer
      this.answer = {
        questionRef: this.question,
        answerVal: answer,
        result: this.question.answer === answer,
        index: this.question.index
      };

      return this.answer.result;
    }
  }

  private answered() {
    return this.answer && this.answer.answerVal !== '';
  }

  private responseTypeEnumHelper(answer: string): ResponseTypeEnum {
    if (this.answer.answerVal === answer) {
      if (this.answer.result) {
        return ResponseTypeEnum.Correct;
      } else {
        return ResponseTypeEnum.Incorrect;
      }
    } else {
      return ResponseTypeEnum.Void;
    }
  }

  cssClassHelper(answerVal: string) {
    if (this.answered()) {
      if (answerVal === this.answer.questionRef.answer) {
        return 'list-group-item-success';
      } else if (this.responseTypeEnumHelper(answerVal) === this.responseTypeEnum.Correct) {
        return 'list-group-item-success';
      } else if (this.responseTypeEnumHelper(answerVal) === this.responseTypeEnum.Incorrect) {
        return 'list-group-item-danger';
      } else if (this.responseTypeEnumHelper(answerVal) === this.responseTypeEnum.Void) {
        return 'list-group-item-default';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  async updateScoreApi() {
    await this.testingService.updateScore(this.answer.result ? 1 : -1);
  }

  status() {
    return {
      correct: this.timeLine.filter(x => x.result).length,
      incorrect: this.timeLine.filter(x => !x.result).length
    };
  }
}
