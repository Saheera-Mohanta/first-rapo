
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = 'if else condition'
  show: boolean = true;

  public checkValue() {
    this.show = false;

  }
  cdata:any;
  getdata(val:any){
    this.cdata=val;
  
  }


}
