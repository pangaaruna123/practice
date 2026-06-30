import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Network {
  userName: string = '';
  apiurl = 'http://localhost:3000';
  // If you run backend on another host/port, update this value.
  constructor(private http: HttpClient) { }
  getdata(payload: any): Observable<any> {
    return this.http.post(`${this.apiurl}/api/data`, payload).pipe(
      map((res: any) => {
        console.log('Data received:', res);
        return res;
      }),
      catchError((err) => {
        console.error('Error fetching data:', err);
        throw err;

      })
    );
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiurl}/api/users`).pipe(
      map((res: any) => {
        console.log('Data received:', res);
        return res;
      }),
      catchError((err) => {
        console.error('Error fetching data:', err);
        throw err;

      })
    );
  }
  sendUserData(userData: any): Observable<any> {
    return this.http.post(`${this.apiurl}/api/signup`, userData).pipe(
      map((res: any) => {
        console.log('Data received:', res);
        return res;
      }),
      catchError((err) => {
        console.error('Error fetching data:', err);
        throw err;

      })
    );
  }
  getMovieUsers(payload: any): Observable<any> {
    return this.http.post('/api/moviesignup', payload).pipe(
      map((res: any) => {
        console.log('Data received:', res);
        return res;
      }),
      catchError((err) => {
        console.error('Error fetching data:', err);
        throw err;

      })
    );
  }
}
