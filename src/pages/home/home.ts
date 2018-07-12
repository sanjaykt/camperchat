import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  chatMessage: string = '';
  message: any = [];

  constructor(public navCtrl: NavController,
              public dataService: DataProvider) {

  }

  sendMessage(): void {
    
  }

}
