import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Webpage } from './webpage/webpage';
import { Network } from './network';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login, CommonModule, HttpClientModule],
  providers: [Network],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
