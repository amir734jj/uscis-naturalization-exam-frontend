import { Component, OnInit } from '@angular/core';
import {IdentityService} from '../../../services/identity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private identityService: IdentityService, private router: Router) { }

  ngOnInit() {

  }

  async handleLogIn(event) {
    event.stopPropagation();

    const result = await this.identityService.logIn(this.username, this.password);

    if (result) {
      await this.router.navigate(['./home']);
    }
  }

}
