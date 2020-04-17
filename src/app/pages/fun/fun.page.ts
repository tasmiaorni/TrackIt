import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket'

@Component({
  selector: 'app-fun',
  templateUrl: './fun.page.html',
  styleUrls: ['./fun.page.scss'],
})
export class FunPage implements OnInit {
  public appBucket: Array<Bucket>;

  constructor(public navCtrl: NavController
    ) { 
      this.appBucket = [
        {
          title: 'Fun',
          amount: 226.90,
          url: '/fun',
          direct: 'forward',
          icon: "beer",
          color:"warning",
          budget: 230.00
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
