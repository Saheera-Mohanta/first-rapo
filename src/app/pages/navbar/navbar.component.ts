import { Component } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


interface Product{
  name:string;
  price:string;
  description:string;
  imageUrl:string;
}



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {

  public login?:Product;

 public form = new UntypedFormGroup({
  
  name: new UntypedFormControl('',[Validators.required]),
  price: new UntypedFormControl('',[Validators.required]),
  description: new UntypedFormControl('',[Validators.required]),
  imageUrl: new UntypedFormControl('',[Validators.required])
 })

 

  onSubmit()
  {
    console.log(this.form.value);
    this.login=this.form.value;
    console.log(this.login);
    
  }

  public get name():AbstractControl{
    return this.form.controls['name'];
    
    
  }

  public get price():AbstractControl{
    return this.form.controls['price'];
    
    
  }
  public get description():AbstractControl{
    return this.form.controls['description'];
    
    
  }
  public get imageUrl():AbstractControl{
    return this.form.controls['imageUrl'];
    
    
  }

  }


