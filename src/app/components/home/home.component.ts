import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';
import {AuthenticationUtility} from '../../utilities/authentication.utility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  scoreInfo: {
    score: number,
    board: {
      fullname: string,
      score: number
    }[]
  };
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
    this.authenticated = this.authenticationUtility.getIsAuthenticated();
    await this.updateScoreInfo();
  }

  async updateScoreInfo() {
    const result = await this.scoreService.scoreInfo();

    const scores: { fullname: string; score: number }[] = Object.keys(result.board).map(key => {
      return {
        fullname: key,
        score: result.board[key] as number
      };
    });

    this.scoreInfo = result ? {
      score: result.score,
      board: scores
    } : null;
  }
}
