import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket'

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {
  public appBucket: Array<Bucket>;

  constructor(public navCtrl: NavController
    ) { 
      this.appBucket = [
        {
          title: 'Other',
          amount: 89.99,
          url: '/other',
          direct: 'forward',
          icon: "apps",
          color:"success",
          budget: 300.00

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
