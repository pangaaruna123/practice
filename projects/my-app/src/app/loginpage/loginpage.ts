import { Component } from '@angular/core';
import { Store } from '../store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  imports: [HttpClientModule, CommonModule],
  providers: [Store],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
  standalone: true,
})
export class Loginpage {
  users: any[] = [];
constructor(private store: Store) {}
ngOnInit() {
  this.store.getUsers().subscribe(users => {
    this.users = users;
    console.log(users,'21232');
  });
  // this.http.get(this.apiUrl).subscribe(users => {
  //   console.log(users,'21232');
  // });
}

}
