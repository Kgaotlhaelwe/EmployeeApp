
export class Employee {
   id:string;
   firstname:string;
   lastname:string;
   role:string;
   image:string;
   
    constructor( id:string, firstname:string, lastname:string, role ,  image:string){
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.role=role;
        this.image=image;

    }
}