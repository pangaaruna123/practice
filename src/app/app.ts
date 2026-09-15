import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Employeedetails } from './employeedetails/employeedetails';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Employeedetails,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('datevalidations');
}
