import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VIEW_ADDRESS} from '../constants/api.routes';

@Injectable({
  providedIn: 'root'
})
export class ConnectionTestService {
  host: string = VIEW_ADDRESS + '/home';

  constructor(private http: HttpClient) { }

  testEcho() {
    return this.http.get<any>(`${this.host}/echo`);
  }
}
