import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, OnDestroy, HostListener } from '@angular/core';

interface Testimonial {
  id: number;
  images: string[];
  texts: string[];
  names: string[];
  positions: string[];
  companies: string[];
}

@Component({
  selector: 'app-testmonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      id: 1, 
      images: [
        'assets/images/avatar1.jpg', 
        'assets/images/FIL.jpg', 
        'assets/images/al.jpg'
      ],
      texts: [
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
      ],
      names: ['Alice Dupont', 'Jean Martin', 'Sophie Laurent'],
      positions: ['CEO', 'Manager', 'Directrice'],
      companies: ['Meta', 'Google', 'Apple']
    },
    {
      id: 2, 
      images: [
        'assets/images/am.jpg', 
        'assets/images/aw.jpeg', 
        'assets/images/tem.jpg'
      ],
      texts: [
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus' ,
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
      ],
      names: ['Lucas Morel', 'Chloé Bernard', 'Pierre Durand'],
      positions: ['Responsable', 'Analyste', 'Designer'],
      companies: ['Amazon', 'Microsoft', 'Netflix']
    },
    {
      id: 3, 
      images: [
        
        'assets/images/pex.jpg', 
        'assets/images/PRI.jpg', 
        'assets/images/am.jpg'
      ],
      texts: [
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus' ,
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
        'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ',
      ],
      names: ['Lucas Morel', 'Chloé Bernard', 'Pierre Durand'],
      positions: ['Responsable', 'Analyste', 'Designer'],
      companies: ['Amazon', 'Microsoft', 'Netflix']
    }
  ];

  currentGroupIndex = 0;
  autoSlideInterval: any;
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
  @HostListener('window:resize')
  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.testimonials.length) {
      this.currentGroupIndex = index;
      this.resetAutoSlide();
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentGroupIndex = (this.currentGroupIndex + 1) % this.testimonials.length;
  }

  pauseAutoSlide(): void {
    this.stopAutoSlide();
  }

  resumeAutoSlide(): void {
    this.startAutoSlide();
  }
}