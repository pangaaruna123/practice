import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Store {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    console.log('Fetching users from API...');
    return this.http.get(`${this.baseUrl}/items`).pipe(
      map(response => {
        console.log('Response received:', response);
        return response; 
      }),
      catchError(error => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  senduserDetails(userData: any): Observable<any> {
    console.log('Sending user details to API...', userData);
    return this.http.post(`${this.baseUrl}/login`, userData).pipe(
      map(response => {
        console.log('User login successful:', response);
        return response;
      }),
      catchError(error => {
        console.error('Error sending user details:', error);
        return throwError(() => error);
      })
    );
  }
}
