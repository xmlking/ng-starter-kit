import * as angular from 'angular';
import {defaults, Component, autoinject} from 'ng-decorate';

import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-new-router';

// Our one and only angular module.
export let app = angular.module('myApp', ['ng','ngAria', 'ngAnimate', 'ngMaterial', 'ngNewRouter']);

// Use this module in all directive and service declarations.
defaults.module = app;

defaults.makeTemplateUrl = function(elementName: string): string {
  return 'components/' + elementName + '/' + elementName + '.html';
};


@Component({
  selector: 'app',
  template: '<ng-viewport></ng-viewport>'
})
class App {
  @autoinject private $router;
  constructor() {
    console.log('in app');
    this.$router.config([
      { path: '/home',       component: 'home' },
      { path: '/dashboard',  component: 'dashboard' },
      { path: '/',           redirectTo: '/home/login' }
    ]);
  }
}
