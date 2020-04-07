import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConnectToBankPage } from './connect-to-bank.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectToBankPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConnectToBankPage]
})
export class ConnectToBankPageModule {}
