import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  imports: [CommonModule,FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homepage {

  searchText: string = '';

  showResults: boolean = false;

  filteredCities: any[] = [];

  cities = [

    {
      city: 'Hyderabad',

      places: [
        {
          name: 'Charminar',
          image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1200&auto=format&fit=crop',
          description: 'Historic monument and famous tourist attraction.'
        },
        {
          name: 'Golconda Fort',
          image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop',
          description: 'Beautiful fort with rich history.'
        }
      ],

      hotels: [
        {
          name: 'Taj Krishna',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
          description: 'Luxury hotel in Hyderabad.'
        },
        {
          name: 'ITC Kohenur',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop',
          description: 'Premium luxury hotel.'
        }
      ],

      culture: [
        {
          name: 'Hyderabadi Biryani',
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=1200&auto=format&fit=crop',
          description: 'Traditional food of Hyderabad.'
        }
      ]
    },

    {
      city: 'Goa',

      places: [
        {
          name: 'Baga Beach',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
          description: 'Popular beach destination.'
        }
      ],

      hotels: [
        {
          name: 'Beach Resort',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
          description: 'Luxury beach stay.'
        }
      ],

      culture: [
        {
          name: 'Goa Carnival',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
          description: 'Famous cultural celebration.'
        }
      ]
    }

  ];

  getDetails() {

    if (this.searchText.trim() === '') {

      this.showResults = false;
      return;

    }

    this.filteredCities = this.cities.filter((item: any) =>
      item.city.toLowerCase().includes(this.searchText.toLowerCase())
    );
console.log(this.filteredCities,'101');
    this.showResults = true;

  }
}