import {Routes} from '@angular/router';
import {RouteNotFoundComponent} from './components/route-not-found/route-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {TestingComponent} from './components/testing/testing.component';
import {LearningComponent} from './components/learning/learning.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home'},
    {path: 'home',  component: HomeComponent},
    {path: 'testing', component: TestingComponent},
    {path: 'learning', component: LearningComponent},
    {path: '**', component: RouteNotFoundComponent},
];
