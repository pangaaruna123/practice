import { Component } from '@angular/core';
import { Network } from '../network';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-selectmovieseat',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './selectmovieseat.html',
  styleUrl: './selectmovieseat.scss',
})
export class Selectmovieseat {
userName:string='';
colidx:number=-1;
rows=['A','B','C','D','E'];
seats=[1,2,3,4,5,6,7,8];
rowIdx: number=-1;

  constructor() { }
ngOnInit(){
  let user=localStorage.getItem('currentUser');
  if(user){
    this.userName=JSON.parse(user);
  }
// let userData=localStorage.getItem('users');

// if(userData){
//   const user = JSON.parse(userData);
//   console.log('User data:', user);
// }
}
isOccupied(i: number, r: number){
this.colidx=i;
this.rowIdx=r;
console.log(i,r)
}


}
