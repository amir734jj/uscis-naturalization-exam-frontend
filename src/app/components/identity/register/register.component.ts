import { Component, OnInit } from '@angular/core';
import {IdentityService} from '../../../services/identity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullname: string;
  email: string;
  username: string;
  password: string;

  constructor(private identityService: IdentityService, private router: Router) { }

  ngOnInit() {
  }

  async handleRegister(event) {
    event.stopPropagation();

    const result = this.identityService.register(this.fullname, this.email, this.username, this.password);

    if (result) {
      await this.router.navigate(['./login']);
    }
  }
}
