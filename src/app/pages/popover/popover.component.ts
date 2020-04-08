import { Component, OnInit } from '@angular/core';
import { NavController,AlertController ,ModalController,PopoverController} from '@ionic/angular';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public mdlCtrl:ModalController,
    public popCtrl:PopoverController) { }

  ngOnInit() {
  }
  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

}
