import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Network {
  constructor(private http: HttpClient) { }
  getdata(payload: any): Observable<any> {
    return this.http.post('http://localhost:4200/api/data', payload).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err) => {
        console.error('Error fetching data:', err);
        throw err;
      })
    );
  }
}
