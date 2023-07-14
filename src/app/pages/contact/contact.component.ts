import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  color="red";
  text='red'

  public updateColor(){
    this.color="blue"
    this.text='blue'

  }
}
