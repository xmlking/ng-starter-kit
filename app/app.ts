import * as angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-new-router';

import {AsModule, bootstrap, Component, View, RouteConfig} from 'a1atscript';

//import  HomeController from './components/home/HomeController';
import  DashboardController from './components/dashboard/DashboardController';

@Component({controllerAs: 'sub'})
@View({
  template: '<p>Sub: </p> <md-button class="md-raised md-warn">{{sub.awesome}}</md-button>'
})
class SubComponent {
  awesome: string;
  constructor() {
    this.awesome = " sub Hello!";
  }
}

@Component({controllerAs: 'home'})
@View({
  template: "<p>Home: Awesome {{home.awesome}}</p><ng-viewport></ng-viewport>"
})
@RouteConfig(
    {
      path: "/sub", component: SubComponent
    }
)
class HomeComponent {
  awesome: string;
  constructor() {
    this.awesome = " home Hello!";
  }
}

// the AsModule annotation is an extra need to setup Angular's module system on the top level component for now
@AsModule('AppModule', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngNewRouter', HomeComponent, SubComponent, DashboardController])
@Component({
  selector: "app"
})
@View({
  inline:   `<ul class="pager">
              <li><a ng-link="home">home</a></li>
              <li><a ng-link="home/sub">sub</a></li>
            </ul>
            <ng-viewport><ng-viewport>`
})
@RouteConfig({
  path: "/home", component: HomeComponent
})
class App {
}

bootstrap(App);

export default angular.module('AppModule');
