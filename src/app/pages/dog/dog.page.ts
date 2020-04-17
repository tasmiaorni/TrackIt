import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Bucket} from '../../interfaces/bucket'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.page.html',
  styleUrls: ['./dog.page.scss'],
})
export class DogPage implements OnInit {
  public appBucket: Array<Bucket>;

  constructor(public navCtrl: NavController
    ) {
      this.appBucket = [
        {
          title: 'Pet',
          amount: 133.20,
          url: '/dog',
          direct: 'forward',
          icon: "paw",
          color:"danger",
          budget: 100.00

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
