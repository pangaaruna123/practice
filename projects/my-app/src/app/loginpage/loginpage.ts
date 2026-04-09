import { Component } from '@angular/core';
import { Store } from '../store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  imports: [],
  providers: [Store],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
  standalone: true,
})
export class Loginpage {
constructor(private store: Store,private http: HttpClient) {}
apiUrl = 'http://localhost:3000/api';
ngOnInit() {
  // this.store.getUsers().subscribe(users => {
  //   console.log(users,'21232');
  // });
  this.http.get(this.apiUrl).subscribe(users => {
    console.log(users,'21232');
  });
}

}
