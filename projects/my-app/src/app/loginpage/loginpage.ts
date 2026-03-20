import { Component } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-loginpage',
  imports: [],
  providers: [Store],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
constructor(private store: Store) {}

ngOnInit() {
  this.store.getUsers().subscribe(users => {
    console.log(users,'21232');
  });
}
}
