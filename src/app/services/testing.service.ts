import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api.roures';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  host: string = API_ADDRESS + '/score';

  constructor(private httpClient: HttpClient) {
  }

  async updateScore(offset: number): Promise<Object> {
    const uri = `${this.host}`;

    const result = await this.httpClient.put(uri, {offset});

    return result;
  }
}
