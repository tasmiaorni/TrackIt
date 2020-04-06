import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';


@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.page.html',
  styleUrls: ['./rent-car.page.scss'],
})
export class RentCarPage implements OnInit {

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
