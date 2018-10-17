import {Routes} from '@angular/router';
import {RouteNotFoundComponent} from './components/route-not-found/route-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {TestingComponent} from './components/testing/testing.component';
import {LearningComponent} from './components/learning/learning.component';
import {LogoutComponent} from './components/identity/logout/logout.component';
import {RegisterComponent} from './components/identity/register/register.component';
import {LoginComponent} from './components/identity/login/login.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'testing', component: TestingComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: RouteNotFoundComponent},
];
