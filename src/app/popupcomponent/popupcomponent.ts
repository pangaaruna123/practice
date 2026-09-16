import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupcomponent',
  imports: [MaterialModule,CommonModule],
  templateUrl: './popupcomponent.html',
  styleUrl: './popupcomponent.scss',
})
export class Popupcomponent {
 constructor(private mt:MatDialogRef<Popupcomponent>){}

 closepopup(){
  this.mt?.close()
 }
 deleterecord(){
    this.mt?.close()

 }
}
