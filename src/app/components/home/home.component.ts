import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';
import {ScoreInfo} from '../../models/ScoreInfo';
import {AuthenticationUtility} from '../../utilities/authentication.utility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  scoreInfo: ScoreInfo;
  authenticated: boolean;

  constructor(private scoreService: ScoreService, private authenticationUtility: AuthenticationUtility) {
    this.authenticated = false;

    this.authenticationUtility.addOnChangeHandler(x => {
      this.authenticated = x;
    });
  }

  async ngOnInit() {
    await this.updateScoreInfo();
    this.authenticated = this.authenticationUtility.getIsAuthenticated();
  }

  async ngAfterContentInit() {
    await this.updateScoreInfo();
  }

  async updateScoreInfo() {
    this.scoreInfo = await this.scoreService.scoreInfo();
  }
}
