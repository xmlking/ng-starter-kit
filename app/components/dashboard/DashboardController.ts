import {Controller} from 'a1atscript';
import  '../settings/SettingsController';
import  '../welcome/WelcomeController';


@Controller('DashboardController')
export default class DashboardController {
  heading: string;
  static $routeConfig = [
    { path: '/welcome',      component: 'welcome' },
    { path: '/settings',      component: 'settings' },
    //{ path: '/welcome1/settings1', components: { left: 'welcome', right: 'settings' }, as:'ws' },
    //{ path: '/settings1/welcome1', components: { left: 'settings', right: 'welcome' }, as:'sw' },
  ];
  constructor() {
    console.log('in DashboardController');
    this.heading = 'Welcome to The New Angular Router Demo!';
  }
}

