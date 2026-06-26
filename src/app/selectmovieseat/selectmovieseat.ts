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
  isSeatSelected: boolean = true;
  seatId: string = '';
  userData: any;
  isconfirm: boolean = false;

  constructor(private nt: Network, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    let user = localStorage.getItem('currentUser');
    if (user) {
      this.userName = JSON.parse(user);
    }
    console.log(user, '8888')
    let userData = localStorage.getItem('userSeatsData');

    if (userData) {
      this.userData = JSON.parse(userData);
      console.log('User data:', this.userData, this.userData?.seats.includes('C5'));
    }
  }

  isOccupied(r: number, i: number) {
    this.isSeatSelected = !this.isSeatSelected;
    console.log('Seat selected:', this.isSeatSelected);
    console.log(r, i)
    const seatId = `${this.rows[r]}${this.seats[i]}`;
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
  confirmSeats() {
    this.seatIds.forEach((seatId: string) => {
      if (seatId) {
        this.isconfirm = true;
      }
    });
    console.log(this.isconfirm)
    localStorage.setItem('userSeatsData', JSON.stringify({ user: this.userName, seats: this.seatIds }));
    console.log('Confirmed Seats:', this.seatIds);
  }

}
