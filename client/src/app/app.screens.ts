/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { loginlightblue_PhonePortrait } from '../pages/loginlightblue/PhonePortrait/loginlightblue';
import { loginpage_PhonePortrait } from '../pages/loginpage/PhonePortrait/loginpage';
import { homeiconcolorblocks_PhonePortrait } from '../pages/homeiconcolorblocks/PhonePortrait/homeiconcolorblocks';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    loginlightblue_PhonePortrait,
    loginpage_PhonePortrait,
    homeiconcolorblocks_PhonePortrait
  ];
  static mapping = {
    'loginlightblue': {
      PhonePortrait: loginlightblue_PhonePortrait
    },
    'loginpage': {
      PhonePortrait: loginpage_PhonePortrait
    },
    'homeiconcolorblocks': {
      PhonePortrait: homeiconcolorblocks_PhonePortrait
    }
  }
}