import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {

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
