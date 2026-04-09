import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Store {
  baseUrl = 'https://laughing-computing-machine-v6p6qq6xjqg93p4qw-4200.app.github.dev/';
constructor(private http:HttpClient) {}  
  getUsers():Observable<any> {
    console.log('Fetching users from API...');
    return this.http.get(`${this.baseUrl}/items`);
  }
}
