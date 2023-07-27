import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, EventEmitter } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm } from '@angular/forms';
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
   signupForm: FormGroup;
   FirstName:string="";
   LastName:string="";
   Email:string="";
   Password:string="";

   constructor(private frmbuilder:FormBuilder){
    this.signupForm=frmbuilder.group({
      fname:new FormControl(),
      lname:new FormControl(),
      Emailid:new FormControl(),
      userpassword:new FormControl()

    });

   }
   PostData(signupForm:any){
     console.log(signupForm.controls)
   }


  }

  


