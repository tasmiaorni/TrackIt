import { Component, OnInit } from '@angular/core';
import { Bucket } from '../../interfaces/bucket';
import { NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  
  public appBucket: Array<Bucket>;
  
//public navParams:NavParams
  constructor(public navCtrl: NavController
    ) {

    this.appBucket = [
      {
        title: "Rent+Car",
        amount: 1105.00,
        url: '/rent-car',
        direct: 'forward',
        icon:"home",
        color:"success"
      },
      {
        title: "Insurance",
        amount: 455.00,
        url: '/insurance',
        direct: 'forward',
        icon:"folder",
        color:"success"
      },
      {
        title: "Groceries",
        amount: 522.30,
        url: '/grocery',
        direct: 'forward',
        icon:"cart",
        color:"warning"
      },

      {
        title: "Pet",
        amount: 133.20,
        url: '/dog',
        direct: 'forward',
        icon:"paw",
        color:"danger"
      },

      {
        title: "Health",
        amount: 495.00,
        url: '/health',
        direct: 'forward',
        icon:"medkit",
        color:"danger"
      },

      {
        title: "Fun",
        amount: 226.90,
        url: '/fun',
        direct: 'forward',
        icon:"beer",
        color:'warning'
      },

      {
        title: "Other",
        amount: 89.99,
        url: '/other',
        direct: 'forward',
        icon:"apps",
        color:"success"
      },
    ];
   }
 

  ngOnInit() {
    
  }

 
  /*storeNewBucket(newValue:any){
  

    let titleGot=this.navParams.get('titleVal');
    let amountGot=this.navParams.get('amountVal');
    let newBucket: Bucket;
    newBucket={
      title:titleGot,
      amount:amountGot,
      url:'/summary',
    };
    this.appBucket.push(newValue);
  }*/

  goToHome() {
    this.navCtrl.navigateRoot('/home-accounts');
  }

}
