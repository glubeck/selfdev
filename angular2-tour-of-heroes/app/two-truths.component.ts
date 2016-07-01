import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'two-truths',
  templateUrl: 'app/two-truths.component.html',
  styleUrls: ['app/two-truths.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {}

}
