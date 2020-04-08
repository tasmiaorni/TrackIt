import { Component, OnInit } from '@angular/core';
import { NavController,AlertController ,ModalController,PopoverController} from '@ionic/angular';
import { LoadedRouterConfig } from '@angular/router/src/config';


@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public mdlCtrl:ModalController,
    public popCtrl:PopoverController,
    ) { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
 
  async addCategory() {
    const alert = await this.alertCtrl.create({
      header:'Alert',
     // subHeader:'Subtitle',
      message:'Your category is added',
      buttons:['OK']
    });
  
    await alert.present();
    let result=await alert.onDidDismiss();
    console.log(result);
    }

  }
  

