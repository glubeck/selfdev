import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './two-truths.component';
import { HeroesComponent } from './who-said-it.component';
import { LeaderboardComponent } from './leaderboard.component';


@Component({
  selector: 'my-app',
  template: `
    <div class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="javascript:void(0)">MTC Games</a>
    </div>
    <div class="navbar-collapse collapse navbar-inverse-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a [routerLink]="['Two_Truths']">Two Truths</a></li>
        <li><a [routerLink]="['Who_Said_It']">Who Said It</a></li>
		<li><a [routerLink]="['Leaderboard']">Leaderboard</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown">Grant Lubeck
            <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="javascript:void(0)">Profile</a></li>
            <li><a href="javascript:void(0)">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/two-truths',
    name: 'Two_Truths',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/who-said-it',
    name: 'Who_Said_It',
    component: HeroesComponent
  },
   {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: LeaderboardComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}