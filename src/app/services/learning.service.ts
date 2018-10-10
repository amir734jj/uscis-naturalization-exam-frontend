import { Injectable } from '@angular/core';
import {VIEW_ADDRESS} from '../constants/api.roures';
import {HttpClient} from '@angular/common/http';
import * as download from 'downloadjs';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  host: string = VIEW_ADDRESS + '';

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  toStreamUrl(index: number) {
    return `${this.host}/audio/track (${index}).mp3`;
  }

  toImageUrl(index: number) {
    return `${this.host}/images/slide (${index}).jpg`;
  }

  async downloadTrack(index: number) {
    const blob  = await this.httpClient.get(this.toStreamUrl(index), { responseType: 'blob' })
      .toPromise();

    download(blob, `track (${index}).mp3`, 'audio/mp3');
  }
}
