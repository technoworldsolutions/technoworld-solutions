import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751809247/Carousal1111_vznirl.jpg',
      title: 'Precision Laser Cutting',
      caption: 'Precision in Every Cut, Strength in Every Frame'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751808501/GateCarousal22_a2b3co.jpg',
      title: 'Sliding Gates',
      caption: 'Strong, secure, and beautifully designed for robustness.'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751808501/DoorsCarousal11_tjmpgl.jpg',
      title: 'Safety Metal Doors',
      caption: 'Strong, secure, and beautifully designed for robustness.'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751808501/Carousal34_hhzalx.jpg',
      title: 'Custom Laser Cutting',
      caption: 'Your imagination and our promise to produce it!'
    }
  ];

  services = [
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3328/3328913.png',
      title: 'Safety Doors',
      description: 'Strong, durable & custom-designed doors.'
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/2668/2668405.png',
      title: 'Sliding Gates',
      description: 'Smooth sliding gates for homes & factories.'
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/11945/11945227.png',
      title: 'Windows & Grills',
      description: 'Stylish window grills with precision cutting.'
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/17686/17686658.png',
      title: 'Fabrication Works',
      description: 'Custom fabrication to fit your needs.'
    }
  ];


}
