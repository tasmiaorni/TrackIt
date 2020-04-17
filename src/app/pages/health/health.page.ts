import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket'

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
  public appBucket: Array<Bucket>;

  constructor(public navCtrl: NavController
    ) { 
      this.appBucket = [
        {
          title: 'Health',
          amount: 495.00,
          url: '/health',
          direct: 'forward',
          icon: "medkit",
          color:"danger",
          budget: 400.00

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
