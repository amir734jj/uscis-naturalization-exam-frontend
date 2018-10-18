import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api.routes';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  host: string = API_ADDRESS + '/score';

  constructor(private httpClient: HttpClient) {
  }

  async updateScore(offset: number): Promise<Object> {
    const uri = `${this.host}`;

    const result: Object = await this.httpClient.put(uri, {offset}).toPromise();

    return result;
  }
}
