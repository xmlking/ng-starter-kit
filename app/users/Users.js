import angular from 'angular';

// Load the custom app ES6 modules
import UsersController from './UsersController';
import UsersService from './UsersDataservice';

import browserUsersTpl from './browserUsers.html!text';

// Define the Angular 'users' module

export default angular
	.module('users', [])
	.service('usersService', UsersService)
	.config(($stateProvider) => {

		$stateProvider
			.state('users', {
				url: '/',
				template: browserUsersTpl,
				controller: UsersController,
				controllerAs: 'ul'
			});
	});
