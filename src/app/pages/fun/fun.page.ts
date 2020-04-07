import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.page.html',
  styleUrls: ['./fun.page.scss'],
})
export class FunPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateForward('summary');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-accounts');
  }
}
