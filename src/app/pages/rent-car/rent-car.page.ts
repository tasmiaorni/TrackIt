import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket'

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.page.html',
  styleUrls: ['./rent-car.page.scss'],
})
export class RentCarPage implements OnInit {
  public appBucket: Array<Bucket>;
  
  constructor(public navCtrl: NavController
    ) {
      this.appBucket = [
        {
          title: 'Rent+Car',
          amount: 1105.00,
          url: '/rent-car',
          direct: 'forward',
          icon: "home",
          color:"success",
          budget: 1400.00

        },
      ];
     }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('summary');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-accounts');
  }
}
