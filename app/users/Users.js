import angular from 'angular';

// Load the custom app ES6 modules
import UsersController from './UsersController';
import UsersService from './UsersDataservice';

import browserUsersTpl from './browserUsers.html!text';
import contactSheetTpl from './contactSheet.html!text';

// Define the Angular 'users' module

export default angular
	.module('users', [browserUsersTpl.name, contactSheetTpl.name])
	.service('usersService', UsersService)
	.config(($stateProvider) => {

		$stateProvider
			.state('users', {
				url: '/',
				templateUrl: browserUsersTpl.name,
				controller: UsersController,
				controllerAs: 'ul'
			});
	});
