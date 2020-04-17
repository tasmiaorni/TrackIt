import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket'

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {
  public appBucket: Array<Bucket>;

  constructor(public navCtrl: NavController
    ) { 
      this.appBucket = [
        {
          title: 'Insurance',
          amount: 455.00,
          url: '/insurance',
          direct: 'forward',
          icon: "folder",
          color:"success",
          budget: 600.00

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
