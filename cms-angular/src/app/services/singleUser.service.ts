import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUsers } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class SingleUser {
  constructor(private http: HttpClient) {}

  getSingleUser(id: number): Observable<IUsers> {
    const Url: string = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get<IUsers>(Url).pipe(
      tap((data) => console.log('all:', JSON.stringify(data))),
      catchError(SingleUser.handleError)
    );
  }

  static handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
