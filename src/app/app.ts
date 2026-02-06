import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Webpage } from './webpage/webpage';

@Component({
  selector: 'app-root',
  imports: [Webpage,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
