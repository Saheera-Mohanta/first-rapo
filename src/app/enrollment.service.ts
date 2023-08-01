import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './pages/users';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

 
    _url= '';
    constructor(private _http:  HttpClient )
   { }

   enroll(uer: Users){
   return this. _http.post<any>(this._url, Users);

   }
}
