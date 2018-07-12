import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController, AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public platform: Platform,
              public menu: MenuController,
              public dataService: DataProvider,
              public alertCtrl: AlertController,
              public facebook: Facebook) {
  }

  login(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.menu.enable(true);
    this.navCtrl.setRoot('HomePage')
  }
}
