import { Facebook } from '@ionic-native/facebook';
import { DataProvider } from './../providers/data/data';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:string = 'LoginPage';

  constructor(public platform: Platform, 
              public dataService: DataProvider,
              public menu: MenuController,
              public facebook: Facebook) {
    platform.ready().then(() => {

    });
  }

  openPage(page): void {

  }

  logout(): void {

  }

}

