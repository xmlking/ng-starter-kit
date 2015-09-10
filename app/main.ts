import * as angular from 'angular';
import app from './app';

angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name], {
    strictDi: true
  });
});

// for debug
console.log(app._invokeQueue);
app['_invokeQueue'].map(function(value) {
  console.log(value[1] + ": " + value[2][0]);
});

