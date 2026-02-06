import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-webpage',
  imports: [CommonModule],
  templateUrl: './webpage.html',
  styleUrl: './webpage.scss',
})
export class Webpage {
features = [
    {
      icon: '📊',
      title: 'Centralized Monitoring',
      text: 'Manage operations in real time with an intuitive interface.'
    },
    {
      icon: '📄',
      title: 'Reporting',
      text: 'Comprehensive data insights and analytics.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Analytics',
      text: 'Detect issues instantly and prevent outages.'
    },
    {
      icon: '🌱',
      title: 'Energy Optimization',
      text: 'Reduce energy consumption efficiently.'
    },
    {
      icon: '🔧',
      title: 'Predictive Maintenance',
      text: 'Prevent failures before they occur.'
    },
    {
      icon: '⏰',
      title: 'Automated Scheduling',
      text: 'Smart automation based on usage patterns.'
    }
  ];

  dashboardFeatures = [
    'Unified Dashboard',
    'Performance Insights',
    'Quick Response',
    'Secure & Reliable'
  ];
   resources = [
    {
      title: 'Smart Lighting Innovations',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: 'assets/images/insight1.jpg'
    },
    {
      title: 'Energy Efficiency Guide',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: 'assets/images/insight2.jpg'
    },
    {
      title: 'Market Trends 2026',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: 'assets/images/insight3.jpg'
    },
    {
      title: 'Sustainable Cities',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: 'assets/images/insight4.jpg'

    }
  ];
  startIndex = 0;
  visibleCount = 4;

  get visibleCards() {
    return this.resources.slice(
      this.startIndex,
      this.startIndex + this.visibleCount
    );
  }

  next() {
    if (this.startIndex + this.visibleCount < this.resources.length) {
      this.startIndex++;
    }
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  // toggleReadMore(index: number) {
  //   this.visibleCards[index].expanded =
  //     !this.visibleCards[index].expanded;
  // }
}
