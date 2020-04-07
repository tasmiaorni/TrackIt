import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-set-accounts',
  templateUrl: './set-accounts.page.html',
  styleUrls: ['./set-accounts.page.scss'],
})
export class SetAccountsPage implements OnInit {

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home-accounts');
  }
}
