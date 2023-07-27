import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  // pipes
  bdr: number = 5;
  employees: any[] = [
    {
      code: 'emp001', name: 'saheer', salary: '85000', dob: '02-2-23'
    },
    {
      code: 'emp002', name: 'RUBINA', salary: '5000', dob: '02-12-13'
    },
    {
      code: 'emp003', name: 'RUBI', salary: '57000', dob: '09-1-03'
    },
    {
      code: 'emp004', name: 'RUINA', salary: '5090', dob: '32-12-13'
    },
    {
      code: 'emp005', name: 'BINA', salary: '50320', dob: '02-1-19'
    }
  ];


  /* parameterize pipes*/
  dob = new Date(1998, 2, 26);
  salary: number = 120000

  /* chaining pipes */

  name: string = "vijay";
  postion: string = "softwere developer";
  work: string = "softwere developer"


  /*date,percent,decimal,currency*/
  currentdate = new Date();
  mynumber: number = 0.12344453675;

  /*json pipe*/

  public employees1 = [{
    "id": 1, "name": "uday"
  },
  {
    "id": 2, "name": "niku"
  },
  {
    "id": 3, "name": "happy"
  },
  {
    "id": 4, "name": "kapil"
  }
  ];

  /*custom pipe*/

  value:any= [
    {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'true',
    isStandard:'true',
    isPremium:'true',
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'true',
    isStandard:'true',
    isPremium:'true',
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'true',
    isStandard:'true',
    isPremium:'true',
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'',
    isStandard:'true',
    isPremium:'true',
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'',
    isStandard:'true',
    isPremium:'true',
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'',
    isStandard:'',
    isPremium:'true',
  },

  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'',
    isStandard:'',
    isPremium:'true',
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    isBasic:'',
    isStandard:'',
    isPremium:'true',
  },
];



}
