import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../../services/score.service';
import {ScoreInfo} from '../../models/ScoreInfo';
import {IdentityService} from '../../services/identity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private scoreInfo: ScoreInfo;
  private authenticated: boolean;

  constructor(private scoreService: ScoreService, private identityService: IdentityService) {
    this.authenticated = false;
  }

  async ngOnInit() {
    this.updateScoreInfo().then();
    this.authenticated = !!(await this.identityService.isAuthenticated());
  }

  async updateScoreInfo() {
    this.scoreInfo = await this.scoreService.scoreInfo();
  }
}
