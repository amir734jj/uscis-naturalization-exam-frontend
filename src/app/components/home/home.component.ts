import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../../services/score.service';
import {ScoreInfo} from '../../models/ScoreInfo';
import {AuthenticationUtility} from '../../utilities/authentication.utility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scoreInfo: ScoreInfo;
  authenticated: boolean;

  constructor(private scoreService: ScoreService, private authenticationUtility: AuthenticationUtility) {
    this.authenticated = false;
  }

  async ngOnInit() {
    this.updateScoreInfo().then();
    this.authenticated = await this.authenticationUtility.getIsAuthenticated();
  }

  async updateScoreInfo() {
    this.scoreInfo = await this.scoreService.scoreInfo();
  }
}
