System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  "buildCSS": true,
  "separateCSS": false
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.3",
    "angular-animate": "github:angular/bower-angular-animate@1.4.3",
    "angular-aria": "github:angular/bower-angular-aria@1.4.3",
    "angular-material": "github:angular/bower-material@0.10.0",
    "angular-messages": "github:angular/bower-angular-messages@1.4.3",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.3",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "json": "github:systemjs/plugin-json@0.1.0",
    "ocLazyLoad": "github:ocombe/ocLazyLoad@1.0.4",
    "oclazyload-systemjs-router": "github:lookfirst/oclazyload-systemjs-router@1.2.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-animate@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-aria@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-mocks@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-material@0.10.0": {
      "angular": "github:angular/bower-angular@1.4.3",
      "angular-animate": "github:angular/bower-angular-animate@1.4.3",
      "angular-aria": "github:angular/bower-angular-aria@1.4.3",
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:lookfirst/oclazyload-systemjs-router@1.2.2": {
      "angular": "github:angular/bower-angular@1.4.3",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
      "oclazyload": "github:ocombe/ocLazyLoad@1.0.4",
      "ui-router-extras": "github:christopherthielen/ui-router-extras@0.0.13"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

