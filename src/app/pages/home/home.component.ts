
import { Component,  } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //preserveWhitespaces:true,
  // inputs:['pdata'],
 // outputs:['childevent']
})


export class HomeComponent {
  // pdata:any;
  //childevent=new EventEmitter
 // onchange(val:any){
    // console.log(val);
   // this.childevent.emit(val);

   signupUsers: any[]=[];
   signupObj:any={
    userName:'',
    email:'',
    password:''
   };

   loginObj:any={
    userName:'',
    password:''
   };

   constructor(){

   }

   onSignUp(){
    this. signupUsers.push(this.signupObj)
   }

   

  }

  


