import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-basicjs',
  templateUrl: './basicjs.component.html',
  styleUrls: ['./basicjs.component.scss']
})
export class BasicjsComponent {
  // basic type number,string,boolen, any, define 2 type
  title = 'Basic of typescript';
  //data:number=20;

  //data = 20;
  data ="string"
  /*getData(item:number)
{
  return item*20;
}
//this.getData("hello")
//show=true;
*/

/*getData(item:number | boolean |string) 
{ 
  if(typeof item === "number")
  {
    return item*20;

  }

}*/


getData()
}
