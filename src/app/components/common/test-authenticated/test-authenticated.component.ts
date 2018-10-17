import {Component, OnInit} from '@angular/core';
import {IdentityService} from '../../../services/identity.service';
import {AuthenticationUtility} from '../../../utilities/authentication.utility';

@Component({
  selector: 'app-test-authenticated',
  templateUrl: './test-authenticated.component.html',
  styleUrls: ['./test-authenticated.component.css']
})
export class TestAuthenticatedComponent implements OnInit {

  constructor(private identityService: IdentityService, private authenticationUtility: AuthenticationUtility) {
    this.identityService.isAuthenticated()
      .then(x => {
        this.authenticationUtility.setIsAuthenticated(true);
      }).catch(() => {
      this.authenticationUtility.setIsAuthenticated(false);
    });
  }

  ngOnInit() {

  }

}
