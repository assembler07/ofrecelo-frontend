import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class RegisterService {


  constructor(private _http: HttpClient) {
  }

  register( user: User): Observable<User> {
    console.log('url:' + `${environment.apiUrl}/user/create`);

    console.log("Body: "+user);
    

    return this._http.post<any>(`${environment.apiUrl}/user/create`, user, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    })
    .pipe(
      retry(1), 
       catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    console.log(errorMessage);
    return throwError(error.error);
}
}
