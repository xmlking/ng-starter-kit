# NG Starter Kit

AngularJS • JSPM • TypeScript • Material • Gulp

### Features 
* dependency management, bundler - **JSPM**
* language - **TypeScript**
* script loading - **SystemJS**
* dependency injection - **Angular DI**
* UI Components - **Material Design**
* Angular2 ES7 decorators with Angular 1.4.x
* cascaded configuration for Gulp (environment specific overwrites)


### Quick start
> After following [one time setup](#development-environment-setup) instructions below, Clone/Download the repo.

```bash
# clone this repo
git clone https://github.com/xmlking/ng-starter-kit.git

# change directory to our repo
cd ng-starter-kit

# install npm packages
npm install gulp-ng-recipes --no-optional
npm npm install gulp-sass # or for windows, `install gulp-ruby-sass` 
npm install

# then open your browser and go to http://localhost:3000
npm start 
```

### Development Environment Setup
> setup your development environment for front-end development.

#### Required Software
* Node.js 4.x 
* Ruby 
* Ruby Gems:
  * `gem install scss`
  * `gem install scss_lint`
* Install global npm modules use for all projects. 
  * `npm install -g gulp tsd jspm`