import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users } from './pages/users';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

 
    _url= 'http://localhost:3000/enroll';
    constructor(private _http:  HttpClient )
   { }

   enroll(users: Users){
   return this. _http.post<any>(this._url, Users)
  .pipe(catchError(this.errorHandler));
           

   }
   errorHandler(error: HttpErrorResponse){
    return throwError(error);
   }
}
