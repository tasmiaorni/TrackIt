import { Component, OnInit } from '@angular/core';
import { Bucket } from '../../interfaces/bucket';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  public appBuckets: Array<Bucket>;

  constructor(public navCtrl: NavController) {
    this.appBuckets = [
      {
        id: 1,
        text: 'Grocery',
        value: 55.21,
  
      },
      {
        id: 2,
        text: 'Rent',
        value: 55.21,
  
      },
      {
        id: 1,
        text: 'Fun',
        value: 55.21,
  
      },

    ];
   }
 

  ngOnInit() {
    
  }


  addBucket( )
  {
    var item = {
    "id":4,
    "text": "New Item",
    "value": 34
    }
  this.appBuckets.push(item);

  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-accounts');
  }

}
