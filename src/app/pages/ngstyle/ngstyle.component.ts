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


//attribute binding
cols:number=3;
bdr:number=5;



/* Event binding*/ 
valueshow(){
  console.log('event binding');
 }

 showdata(){
 alert('hello');
 }

//  two way data binding 

data:string='saheera';
data1:string='vijay';

// pipe
employees:any[]=[
{
  code:'emp001', 
  name:'saheer', 
  salary:'85000',
  dob:'02-2-23'
},
{
  code:'emp002', name:'RUBINA', salary:'5000',dob:'02-12-13'
},
{
  code:'emp003', name:'RUBI', salary:'57000',dob:'09-1-03'
},
{
  code:'emp004', name:'RUINA', salary:'5090',dob:'32-12-13'
},
{
  code:'emp005', name:'BINA', salary:'50320',dob:'02-1-19'
}
];
}