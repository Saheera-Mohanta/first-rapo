import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent {

  
  // getColor(country) {
  //   switch (country) {
  //     case 'UK':
  //       return 'green';
  //     case 'USA':
  //       return 'blue';
  //     case 'HK':
  //       return 'red';
  //   }
  // }

  // people: any[] = [
  //   {
  //     "name": "Douglas  Pace",
  //     "country": 'UK'
  //   },
  //   {
  //     "name": "Mcleod  Mueller",
  //     "country": 'USA'
  //   },
  //   {
  //     "name": "Day  Meyers",
  //     "country": 'HK'
  //   },
  //   {
  //     "name": "Aguirre  Ellis",
  //     "country": 'UK'
  //   },
  //   {
  //     "name": "Cook  Tyson",
  //     "country": 'USA'
  //   }
  // ];


  users=[
    'vijay',
    'sushant',
    'vivek',
    'anterjeet'
  ];

  getcssclass(flag:string){
    let cssclass;
    if(flag=="mode"){
      cssclass={
        'one':true,
        'two':true
      }
    }
    else{
      cssclass={
        'one':false,
        'two':true
      }
    }
    return cssclass;
  }



/* interpolation */

empfirstname:string="Ajeet";
emplastname:string='singh'
a:number=7
b:number=14
constructor(){

}
/* property binding*/
title='saheera'
firstname:string='vijay';



}
