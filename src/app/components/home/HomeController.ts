import {Controller} from  'a1atscript';
import  '../login/LoginController';

@Controller('HomeController')
export default class HomeController {
  name: string;

  static $routeConfig = [
    { path: '/login',        component: 'login' }
  ];
  constructor() {
    console.log('in HomeController');
    this.name = 'sumo';
  }
}
