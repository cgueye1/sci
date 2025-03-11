import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, OnDestroy, HostListener } from '@angular/core';

interface Testimonial {
  id: number;
  image: string;
  text: string;
  name: string;
  position: string;
  company: string;
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
    { id: 1, image: 'assets/images/al.jpg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Alice Dupont', position: 'CEO', company: 'Meta' },
    { id: 2, image: 'assets/images/am.jpg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Jean Martin', position: 'Manager', company: 'Google' },
    { id: 3, image: 'assets/images/aw.jpeg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Sophie Laurent', position: 'Directrice', company: 'Apple' },
    { id: 4, image: 'assets/images/PRI.jpg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Lucas Morel', position: 'Responsable', company: 'Amazon' },
    { id: 5, image: 'assets/images/pex.jpg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Chloé Bernard', position: 'Analyste', company: 'Microsoft' },
    { id: 6, image: 'assets/images/FIL.jpg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Chloé Bernard', position: 'Analyste', company: 'Microsoft' },

  ];

  visibleTestimonials: Testimonial[] = [];
  currentIndex = 0;
  displayCount = 3;
  autoSlideInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateDisplayCount();
    this.updateVisibleTestimonials();

    // Démarrer l'auto-slide uniquement côté navigateur
    if (isPlatformBrowser(this.platformId)) {
      this.autoSlide();
    }
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDisplayCount();
    this.updateVisibleTestimonials();
  }

  updateDisplayCount(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      this.displayCount = width < 768 ? 1 : width < 1024 ? 2 : 3;
    }
  }

  updateVisibleTestimonials(): void {
    this.visibleTestimonials = this.testimonials.slice(this.currentIndex, this.currentIndex + this.displayCount);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  autoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide toutes les 5 secondes
  }
}
