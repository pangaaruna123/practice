import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Network {
      // apiurl="http://localhost:3000";
    apiurl="https://miniature-space-potato-jj9w45rg7w6cpp55-3000.app.github.dev"
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
    return this.http.get(`${this.apiurl}/api/auth/users`).pipe(
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
   return this.http.post(`${this.apiurl}/api/auth/signup`, userData).pipe(
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
