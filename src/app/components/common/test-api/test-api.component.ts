import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AlertConfig, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ConnectionTestService} from '../../../services/connection-test.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
  providers: [AlertConfig]
})
export class TestApiComponent implements OnInit {

  @ViewChild('templateRef') public templateRef: TemplateRef<any>;
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private connectionTestService: ConnectionTestService,
              private alertConfig: AlertConfig) {
    alertConfig.type = 'danger';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
    this.testEcho().then();
  }

  async testEcho() {
    await this.connectionTestService.testEcho().subscribe(_ => _, error => {
      this.showModal();
    });
  }

  showModal() {
    this.modalRef = this.modalService.show(this.templateRef);
  }

  hideModal() {
    this.modalService.hide(1);
  }
}
