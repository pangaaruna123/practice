import { Component, signal } from '@angular/core';
import { Homepage } from './homepage/homepage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Homepage,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
