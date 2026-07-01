import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Network {
  userName: string = '';
  apiurl = '/api';

  constructor(private http: HttpClient) { }

  getdata(payload: any): Observable<any> {
    return this.http.post(`${this.apiurl}/data`, payload).pipe(
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
    return this.http.get(`${this.apiurl}/users`).pipe(
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
    return this.http.post(`${this.apiurl}/signup`, userData).pipe(
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
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiurl}/login`, credentials).pipe(
      map((res: any) => {
        console.log('Login response:', res);
        return res;
      }),
      catchError((err) => {
        console.error('Login error:', err);
        throw err;
      })
    );
  }

  getMovieUsers(payload: any): Observable<any> {
    return this.http.post(`${this.apiurl}/moviesignup`, payload).pipe(
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
