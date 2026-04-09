import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from './store';
import { Users } from './users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [Store,Users],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})

export class App {
  protected readonly title = signal('my-app');
}
