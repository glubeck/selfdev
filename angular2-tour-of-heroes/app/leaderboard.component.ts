import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'leaderboard',
  templateUrl: 'app/leaderboard.component.html',
  styleUrls: ['app/leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {}
}
