import { Injectable } from '@angular/core';
import {VIEW_ADDRESS} from '../constants/api.roures';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  host: string = VIEW_ADDRESS + '';

  constructor() { }

  toStreamUrl(index: number) {
    return `${this.host}/audio/track (${index}).mp3`;
  }

  toImageUrl(index: number) {
    return `${this.host}/images/slide (${index}).jpg`;
  }
}
