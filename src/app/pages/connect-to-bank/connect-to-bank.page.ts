import { Component, OnInit } from '@angular/core';
import { AlertController,
        ToastController,
        NavController,
        LoadingController
        } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-connect-to-bank',
  templateUrl: './connect-to-bank.page.html',
  styleUrls: ['./connect-to-bank.page.scss'],
})
export class ConnectToBankPage implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

    async alertConnect() {
      const alert = await this.alertCtrl.create({
        header: 'Connecting to your bank',
        message: 'Are you sure you want to connect to your bank and retrieve last 30 days transactions.',
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
                message: "Connected. Retrieving Data",
                duration: 10000
              });

              loader.present();

              loader.onWillDismiss().then(async l => {
                const toast = await this.toastCtrl.create({
                  cssClass: 'bg-profile',
                  message: 'New transactions retrieved',
                  duration: 3000,
                  position: 'bottom'
              });

              toast.present();
              this.navCtrl.navigateForward('/home-accounts');
            });
          }
        }  
        ]
      });
      await alert.present();
    }



}
