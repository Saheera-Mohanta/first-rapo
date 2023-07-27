import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss']
})
export class IfelseComponent {

   isvalid:boolean=true;
 changevalue(vaild:any){
 this.isvalid=vaild;
  }

  // title='for loop';
  // Students:any[]=[
  //   {
  //     'name':'rahul kumar'
  //   },
  //   {
  //     'name':'rohan kumar'
  //   },
  //   {
  //     'name':'mohan kumar'
  //   },
  //   {
  //     'name':'sohan kumar'
  //   },
  //   {
  //     'name':'ram  kumar'
  //   },
    
  // ]

  /*titel='trackBy with ngFor '
  student:any[];
  constructor(){
    this.student=[
      {
        studentid:1,
        name:'chandan',
        gender:'male',
        age:27,
        course:'MAC'
      },
      {
        studentid:2,
        name:'mohan',
        gender:'male',
        age:27,
        course:'Bca'
      },
      {
        studentid:3,
        name:'rohan',
        gender:'male',
        age:27,
        course:'MAC'
      },
      {
        studentid:4,
        name:'sohan',
        gender:'male',
        age:27,
        course:'MAC'
      }
    ];
  }
  getmorestudents():void{

    this.student=[
      {
        studentid:1,
        name:'chandan',
        gender:'male',
        age:27,
        course:'MAC'
      },
      {
        studentid:2,
        name:'mohan',
        gender:'male',
        age:27,
        course:'Bca'
      },
      {
        studentid:3,
        name:'rohan',
        gender:'male',
        age:27,
        course:'MAC'
      },
      {
        studentid:4,
        name:'sohan',
        gender:'male',
        age:27,
        course:'MAC'
      },
      {
        studentid:5,
        name:'soni',
        gender:'female',
        age:27,
        course:'MAC'
      }
    ];
  }
  trackbystudentid(index:number,student:any):string{
    return student.studentid;
  }*/


  titel='grouping with ngfor';
  constructor(){}
  countrydetails:any[]=[
    {
      'country':'India',
      'people':[
        {
          "name":"ram kumar"
        },
        {
          "name":"rahul kumar"
        },
        {
          "name":"rajesh kumar"
        }
      ]
    },
    {
      'country':'uk',
      'people':[
        {
          "name":"sita"
        },
        {
          "name":" kumar"
        },
        {
          "name":"raj kumar"
        }
      ]
    },
  ];



 


  data: any[] = [
    { name: 'rame', available: true },
    { name: 'pura', available: false },

  ];
}


