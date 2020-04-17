import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {
  public appBucket: Array<Bucket>;

  constructor(public navCtrl: NavController
    ) { 
      this.appBucket = [
        {
          title: 'Groceries',
          amount: 522.30,
          url: '/grocery',
          direct: 'forward',
          icon: "cart",
          color:"warning",
          budget: 525

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
