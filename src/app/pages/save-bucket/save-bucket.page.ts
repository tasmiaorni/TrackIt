import { Component, OnInit } from '@angular/core';
//import { SummaryPage } from '../../pages/summary/summary.page';
import { NavController,NavParams } from '@ionic/angular';


import { AlertController,
  ToastController,
  LoadingController
  } from '@ionic/angular';

@Component({
  selector: 'app-save-bucket',
  templateUrl: './save-bucket.page.html',
  styleUrls: ['./save-bucket.page.scss'],
})
export class SaveBucketPage implements OnInit {

  titleVal:any;
  amountVal:any;

  constructor( public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams:NavParams,
    //public summary:SummaryPage
    ) { }

  ngOnInit() {
  }

  async alertConnect() {
    const alert = await this.alertCtrl.create({
      header: 'Adding a  new category',
      message: 'Are you sure to create a new category in your account? ',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {            
          text: 'OK',
          handler: async() => {
            console.log('OK clicked')

            const loader = await this.loadingCtrl.create({
              message: "A new category has been added",
              duration: 1000
            });

            loader.present();

           /*let  newValue=
            {
              title: "new",
              amount: 100.00,
              url: '/summary',
              direct: 'forward',
              icon:"home",
            };*/

           // this.navCtrl.goForward(this.summary,this.titleVal);

            //this.navCtrl.goForward(this.summary,this.amountVal);

         
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                cssClass: 'bg-profile',
                message: 'New Category Added',
                duration: 3000,
                position: 'bottom'
            });

            toast.present();
            this.navCtrl.navigateRoot('/summary');
          });
        }
      }  
      ]
    });
    await alert.present();
  }
}
