import {Controller} from  'a1atscript';

@Controller('SettingsController')
export default class SettingsController {
  name: string;
  static heading: string  = 'Settings';
  constructor() {
    console.log('in SettingsController');
    this.name = 'sumo';
  }

  canActivate() {
    console.log('in canActivate');
    return true;
  }

  activate() {
    console.log('in activate');
  }
}
