import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from '../utilities/custom-error-handler.utility';
import {ConnectionTestService} from '../services/connection-test.service';
import {HttpInterceptComponent} from '../components/common/http-intercept/http-intercept.component';
import {TestApiComponent} from '../components/common/test-api/test-api.component';
import {AlertModule, BsModalService, ModalModule} from 'ngx-bootstrap';
import {CommonWrapperComponent} from '../components/common/common-wrapper/common-wrapper.component';
import {TestAuthenticatedComponent} from '../components/common/test-authenticated/test-authenticated.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BsModalService, ConnectionTestService, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  }],
  exports: [CommonWrapperComponent],
  declarations: [
    HttpInterceptComponent,
    TestApiComponent,
    CommonWrapperComponent,
    TestAuthenticatedComponent,
  ]
})
export class CommonComponentsModules {
}
