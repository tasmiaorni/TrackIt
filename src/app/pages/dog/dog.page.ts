import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.page.html',
  styleUrls: ['./dog.page.scss'],
})
export class DogPage implements OnInit {

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
