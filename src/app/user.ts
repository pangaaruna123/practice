import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http:HttpClient){

  }
  getUsers(): Observable <any>{
  return this.http.get('/api/users').pipe(
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
