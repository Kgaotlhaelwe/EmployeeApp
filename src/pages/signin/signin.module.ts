import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninPage } from './signin';
import signuparry from '../../app/signupArray';

import { HomePage } from '../../pages/home/home';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
  ],
})
export class SigninPageModule {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }






}
