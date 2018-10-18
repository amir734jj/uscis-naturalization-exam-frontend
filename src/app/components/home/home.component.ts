import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../../services/score.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

  
}
