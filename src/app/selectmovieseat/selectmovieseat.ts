import { ChangeDetectorRef, Component } from '@angular/core';
import { Network } from '../network';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export interface Seat {
  user: string;
  seats: string[];
}
@Component({
  selector: 'app-selectmovieseat',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './selectmovieseat.html',
  styleUrl: './selectmovieseat.scss',
})
export class Selectmovieseat {
  userName: string = '';
  colidx: number = -1;
  rows = ['A', 'B', 'C', 'D', 'E'];
  seats = [1, 2, 3, 4, 5, 6, 7, 8];
  rowIdx: number = -1;
  seatIds: string[] = [];
  userSeatsData: Seat[] = [];

  constructor(private nt: Network, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    let user = localStorage.getItem('currentUser');
    if (user) {
      this.userName = JSON.parse(user);
    }
    console.log(user, '8888')
   
  }
  ngAfterViewInit() {
 let userData = localStorage.getItem('userSeatsData');

    if (userData) {
      const user = JSON.parse(userData);
      console.log('User data:', user);
      user.seats.forEach((seatId: string) => {
        const seatElement = document.getElementById(seatId) as HTMLElement;
        console.log('Seat element:', seatElement, seatId);
        if (seatElement) {
          seatElement.className = "disabled";
        }
        
      });

    }
  }

  isOccupied(r: number, i: number) {
    console.log(r, i, '123')
    const seatId = `${this.rows[r]}${this.seats[i]}`;
    const seatElement = document.getElementById(seatId) as HTMLElement | null;
    console.log('Seat element:', seatElement, seatId);

    if (seatElement) {
      //  this.seatIds.push({user: this.userName, seats: [seatId]});
      seatElement.className = "occupied";
    }
    if (!this.seatIds.includes(seatId)) {
      this.seatIds.push(seatId);
    }
    if (this.userName) {
      const userData = {
        user: this.userName,
        seats: this.seatIds
      }
      let idx = this.userSeatsData.findIndex((u: any) => u.user === this.userName);
      if (idx === -1) {
        this.userSeatsData.push(userData);
      }
      console.log('Seat IDs:', this.seatIds, userData);
      localStorage.setItem('userSeatsData', JSON.stringify(userData));
    }
  }
  // disabledSeats(row:string,seat:number):boolean{
  //   const seatId = `${row}${seat}`;
  //   let userData=localStorage.getItem('userSeatsData');
  //   if(userData){
  //     const user = JSON.parse(userData);
  //     if(user.seats.includes(seatId)){
  //       return true;
  //     }
  //   }
  //   return false; 
  // }

}
