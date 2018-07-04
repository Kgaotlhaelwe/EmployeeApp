import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import signuparry from '../../app/signupArray';
import{Signup} from '../../app/Signupobj'
import{SigninPage} from '../../pages/signin/signin';

//import{SigninPage} from '../../pages/signin/signin';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {


  username:string ;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
  }

  Login(){
    this.navCtrl.push(SigninPage);

      
  }
  


  SignUp(){



    if(this.username != undefined && this.password != undefined){

      console.log(this.username);


      let signup = new Signup(this.username,this.password);

      signuparry.push(signup);
  
      this.navCtrl.push(SigninPage) ;
  
      console.log(signuparry);
  
      const alert = this.alertCtrl.create({
        title: 'Confirm ',
        subTitle: 'Successfully',
        buttons: ['OK']
      });
      alert.present();
    }

    else {
      const alert = this.alertCtrl.create({
        title: 'Confirm ',
        subTitle: 'Please Enter Username or Password',
        buttons: ['OK']
      });
      alert.present();



    }


    
  } 


  

   






  }
  


