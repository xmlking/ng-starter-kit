angular.element(document).ready(function() {
  return angular.bootstrap(document.body, [appModule.name], {
    //strictDi: true //TODO
  });
});
