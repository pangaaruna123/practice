import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
})
export class Weather {
  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) { }
  city: string = '';

  weather: any;
  error: string='';

  getWeather() {
    if (!this.city || !this.city.trim()) {
      this.error = 'Please enter a city name.';
      this.weather = null;
      return;
    }

    this.error = '';

    const apiKey = 'a0fb23038d1347103e052a8b899e324e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      this.city.trim(),
    )}&appid=${apiKey}&units=metric`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data.cod === 200) {
          this.weather = {
            name: data.name,
            temp: data.main?.temp,
            condition: data.weather?.[0]?.description,
            humidity: data.main?.humidity,
            wind: data.wind?.speed,
            raw: data,
          };
          this.cdr.markForCheck();
          console.log('Weather response', data, '123', this.weather);
        } else {
          this.error = data.message || 'Failed to fetch weather';
          this.cdr.markForCheck();
          return;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.weather = null;
        this.error =
          err.error?.message || err.statusText || 'Failed to fetch weather';
        this.cdr.markForCheck();
        console.error('Weather API error', err);
      },
    });
  }

}
