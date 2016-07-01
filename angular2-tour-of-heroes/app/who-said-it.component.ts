import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/who-said-it.component.html',
  styleUrls:  ['app/who-said-it.component.css'],
  directives: []
})
export class HeroesComponent implements OnInit {

  constructor(
    private _router: Router) { }

  ngOnInit() {}


}
