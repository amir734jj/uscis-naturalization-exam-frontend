import { Component, OnInit } from '@angular/core';
import {IdentityService} from '../../../services/identity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private identityService: IdentityService, private router: Router) { }

  ngOnInit() {
    this.logOut().then();
  }

  async logOut() {
    const result = await this.identityService.logOut();

    if (result) {
      await this.router.navigate(['./home']);
    }
  }

}
