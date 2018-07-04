import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {arr} from '../../app/array';
//import {Employee} from '../../app/Object';


import {Employee} from '../../app/Object';

import { AlertController } from 'ionic-angular';
//import { FormsModule }   from '@angular/forms';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id :string;
  name :string ;
  lastname:string;
  role:string;

  image:string;
 
  arr =[];

  
  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

  }

  
  AddEmployee (){


    
    var temps = this.image.replace("fakepath", " ");
    var temp = temps.split(" ", 2)
    var str = temp[1];
    str = str.substring(1,str.length);
     var url = "../../assets/imgs/" + str;

     console.log(url);
     
               
               let employee = new Employee(this.id,this.name,this.lastname,this.role,url)
                this. arr.push(employee);
               
                 console.log(this.arr);

                // console.log(this.id);

                // this.id=" ";
                // this.name =" ";
                 ///this.lastname=" " ;
                // this.role=" " ;


    }



    DeleteEmployee(i){
      this.arr.splice(i,1);
    }



    UpdateEmployee(i){

      const prompt = this.alertCtrl.create({
        title: 'UPDATE',
        message: "ENTER YOUR DETAILS",
        inputs: [
          {
            name: 'Firstname',
            placeholder:"FirstName"
           
          },

          {
            name: 'LastName',
            placeholder: 'LastName'
          },


          {
            name: 'ID',
            placeholder: 'ID'
          },


          {
            name: 'Role',
            placeholder: 'Role'
          },

          {
            name: 'image',
            type: 'file'
          },

        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {


              var temps = data.image.replace("fakepath", " ");
               var temp = temps.split(" ", 2)
              var str = temp[1];
              str = str.substring(1,str.length);
              var url = "../../assets/imgs/" + str;

             
              let employee = new Employee(data.Firstname,data.LastName,data.ID,data.Role,url);

              this.arr.splice(i,1,employee) ;
              console.log(this.arr);
            }
          }
        ]


        //let employee = new Employee(data.Firstname,data.LastName,data.ID,data.Role,data);
        
      });
      prompt.present();



      
     

     


      

    }





}
