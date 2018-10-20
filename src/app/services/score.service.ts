import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api.routes';
import {ScoreInfo} from '../models/ScoreInfo';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  host: string = API_ADDRESS + '/score';

  constructor(private httpClient: HttpClient) {
  }

  async updateScore(offset: number): Promise<string> {
    const uri = `${this.host}`;

    const result: string = await this.httpClient.put(uri, {offset}, { responseType: 'text'}).toPromise();

    return result;
  }

  async scoreInfo(): Promise<ScoreInfo> {
    const uri = `${this.host}`;

    const result: ScoreInfo = await this.httpClient.get<ScoreInfo>(uri).toPromise();

    return result;
  }
}
