import { Component } from '@angular/core';
import {IdentityService} from './services/identity.service';
import {AuthenticationUtility} from './utilities/authentication.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggled = false;

  constructor(private identityService: IdentityService, private authenticationUtility: AuthenticationUtility) { }

  isAuthenticated() {
    return this.authenticationUtility.getIsAuthenticated();
  }
}
