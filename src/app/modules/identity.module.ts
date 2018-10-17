import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IdentityService} from '../services/identity.service';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {LogoutComponent} from '../components/identity/logout/logout.component';
import {RegisterComponent} from '../components/identity/register/register.component';
import {LoginComponent} from '../components/identity/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [IdentityService, AuthenticationUtility],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ]
})
export class IdentityModule { }
