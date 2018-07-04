import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import signuparry from '../../app/signupArray';


import { HomePage } from '../../pages/home/home';




/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {


  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  
signin =signuparry ;

username:string;
password:string;


//console.log(this.sechaba[0].//)

Signin(){
  
  for (let index = 0; index < this.signin.length; index++) {

    if(this.signin[index].usernmae == this.username  && this.signin[index].password == this.password){

      this.navCtrl.push(HomePage);

    }

    else {

      //console.log("Please enter the correct username and");

      const alert = this.alertCtrl.create({
        title: 'Confirm ',
        subTitle: 'Please enter the correct username or password!',
        buttons: ['OK']
      });
      alert.present();
    }
   
    
  }
}
}
