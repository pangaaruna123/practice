import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http:HttpClient){

  }
  url='https://localhost:3000'
  getUsers(){
    return this.http.get('/api/users')
  }

}
