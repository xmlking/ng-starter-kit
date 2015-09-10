import {Controller}  from 'a1atscript';

@Controller('WelcomeController')
export default class WelcomeController {
  name: string;
  static heading: string  = 'WelcomeController';
  constructor() {
    console.log('in WelcomeController');
    this.name = 'sumo';
  }
}
