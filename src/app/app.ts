import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Webpage } from './webpage/webpage';
import { Network } from './network';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './login/login';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, HttpClientModule, RouterModule],
  providers: [Network],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
