import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Network } from './network';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Weather } from './weather/weather';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, HttpClientModule, RouterModule,Weather],
  providers: [Network],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
