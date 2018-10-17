import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {RequestInterceptor} from '../../../utilities/custom-error-handler.utility';
import {AlertConfig, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-http-intercept',
  templateUrl: './http-intercept.component.html',
  styleUrls: ['./http-intercept.component.css'],
  providers: [AlertConfig]
})
export class HttpInterceptComponent implements OnInit {

  errorMessage: String = '';
  @ViewChild('templateRef') public templateRef: TemplateRef<any>;
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private requestInterceptor: RequestInterceptor,
              private alertConfig: AlertConfig) {
    alertConfig.type = 'warning';
    alertConfig.dismissible = false;
    requestInterceptor.addOnErrorHandler(error => this.onErrorHandler(error));
  }

  ngOnInit() {
  }

  onErrorHandler(errorResponse: HttpErrorResponse) {
    this.errorMessage = errorResponse.message;
    this.showModal();
  }

  showModal() {
    this.modalRef = this.modalService.show(this.templateRef, {
      class: 'modal-lg'
    });
  }

  hideModal() {
    this.modalService.hide(1);
  }
}
