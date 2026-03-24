import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})

export class App {
  protected readonly title = signal('my-app');
}
