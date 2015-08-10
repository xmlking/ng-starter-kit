import angular from 'angular';

import appModule from './app';

// Load custom application modules; currently it is only the 'users' module
import users from './users/Users';

export default angular.module('starter-app', [appModule.name, users.name]);
