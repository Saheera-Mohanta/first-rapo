import { Component } from '@angular/core';

@Component({
  selector: 'app-basicts',
  templateUrl: './basicts.component.html',
  styleUrls: ['./basicts.component.scss'],
})
export class BasictsComponent {
  /*public name: string;
  public email = 'abc@gmail.com';
  public constructor() {
    this.name = '';

    if (this.name) {
      console.log(this.name);
    } else {
      console.log('name empty');
    }
  }

  public valueChange() {
    console.log(this.email);
    this.email = 'def@gmail.com';
    console.log(this.email);
  }
  */
  public color="red"
  public bgColor="yellow"
  public text='red'
    
   public updateColor(){
    this.color="yellow"
    this.text='yellow'
    this.bgColor="red"
    

  }
  

}
