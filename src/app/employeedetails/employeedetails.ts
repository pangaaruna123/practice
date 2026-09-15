import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  imports: [CommonModule,MaterialModule],
  templateUrl: './employeedetails.html',
  styleUrl: './employeedetails.scss',
})
export class Employeedetails implements OnInit {
  employeeData = new MatTableDataSource<any>([]);
  columns:string[]=["id", "name","email", "phoneNumber","dateOfBirth","clgStartDate","clgendDate","workStartDate","workEndDate","address","actions"]

  constructor(private user :User,private rt:Router){}
  ngOnInit(){
    this.user?.getUsers()?.subscribe(res=>{
      // if(res){
        console.log(res,'10333')
        this.employeeData.data=res
      // }
})
  }
  editEmployee(){
    this.rt.navigate(['employeeform'])

  }
  deleteEmployee(){

  }
}
