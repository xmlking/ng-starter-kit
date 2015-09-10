import {Controller} from  'a1atscript';

@Controller('LoginController')
export default class LoginController {
  name: string;
  constructor() {
    console.log(`in LoginController ${this.name}`);
    this.name = 'sumo';
  }
}

