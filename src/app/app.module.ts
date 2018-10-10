import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './router-config';
import {RouteNotFoundComponent} from './components/route-not-found/route-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {TestingModule} from './modules/testing.module';
import {LearningModule} from './modules/learning.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RouteNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    TestingModule,
    LearningModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
