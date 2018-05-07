/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { loginlightblue_PhonePortrait } from '../pages/loginlightblue/PhonePortrait/loginlightblue';
import { homeiconcolorblocks_PhonePortrait } from '../pages/homeiconcolorblocks/PhonePortrait/homeiconcolorblocks';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    loginlightblue_PhonePortrait,
    homeiconcolorblocks_PhonePortrait
  ];
  static mapping = {
    'loginlightblue': {
      PhonePortrait: loginlightblue_PhonePortrait
    },
    'homeiconcolorblocks': {
      PhonePortrait: homeiconcolorblocks_PhonePortrait
    }
  }
}