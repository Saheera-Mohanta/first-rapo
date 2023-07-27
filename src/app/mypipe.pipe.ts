import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any):string {
   if(value)
   return '<i class="fa-solid fa-check tick"></i>' ;
   else
   return '<i class="fa-solid fa-xmark cross"></i>';
  }
  


}
