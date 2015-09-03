export default function routes($urlRouterProvider, $stateProvider) {
  'use strict';

  // For any unmatched url, redirect to /home
  //$urlRouterProvider.otherwise('/home');

  return $stateProvider
    .state('home', {
      abstract: true,
      access: {allowAnonymous: true},
      templateUrl: 'core/layouts/home.layout.html'
    })
    .state('dash', {
      abstract: true,
      access: {allowAnonymous: false, roles: ['ROLE_USER']},
      templateUrl: 'core/layouts/dashboard.layout.html'
    });
}
