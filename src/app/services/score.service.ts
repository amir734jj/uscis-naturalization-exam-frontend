import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api.routes';
import {ExportInfo} from "../models/ScoreInfo";

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

  async scoreInfo(offset: number): Promise<ExportInfo> {
    const uri = `${this.host}`;

    const result: ExportInfo = await this.httpClient.get<ExportInfo>(uri).toPromise();

    return result;
  }
}
