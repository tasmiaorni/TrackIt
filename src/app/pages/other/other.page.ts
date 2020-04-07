import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';


@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {

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
