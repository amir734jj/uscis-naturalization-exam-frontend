import { Injectable } from '@angular/core';
import {API_ADDRESS} from '../constants/api.routes';
import {HttpClient} from '@angular/common/http';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  host: string = API_ADDRESS + '/identity';

  constructor(private httpClient: HttpClient, private authenticationUtility: AuthenticationUtility) {
    this.httpClient = httpClient;
  }

  async isAuthenticated() {
    const uri = `${this.host}/isAuthenticated`;

    return await this.httpClient.get(uri, { responseType: 'text'}).toPromise();
  }

  async logIn(username: string, password: string) {
    const uri = `${this.host}/login`;

    const result = await this.httpClient.post(uri, {
      username,
      password
    }, { responseType: 'text'}).toPromise();

    if (result) {
      this.authenticationUtility.setIsAuthenticated(true);
    }

    return result;
  }

  async logOut() {
    const uri = `${this.host}/logout`;

    const result = this.httpClient.get(uri, { responseType: 'text'}).toPromise();

    if (result) {
      this.authenticationUtility.setIsAuthenticated(false);
    }

    return result;
  }

  async register(fullname: string, email: string, username: string, password: string): Promise<string> {
    const uri = `${this.host}/register`;

    const result = await this.httpClient.post(uri, {
      fullname,
      email,
      username,
      password
    }, { responseType: 'text'}).toPromise();

    return result;
  }
}
