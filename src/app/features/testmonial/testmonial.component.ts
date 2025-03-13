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
    { id: 6, image: 'assets/images/FIL.jpg', text: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus ', name: 'Pierre Durand', position: 'Designer', company: 'Netflix' },
  ];

  testimonialGroups: Testimonial[][] = [];
  currentIndex = 0;
  displayCount = 3;
  autoSlideInterval: any;
  totalSlides = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateDisplayCount();
    this.createTestimonialGroups();
    
    // Démarrer l'auto-slide uniquement côté navigateur
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDisplayCount();
    this.createTestimonialGroups();
    
    // Ajuster l'index si nécessaire après redimensionnement
    if (this.currentIndex > this.totalSlides - 1) {
      this.currentIndex = this.totalSlides - 1;
    }
  }

  updateDisplayCount(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      this.displayCount = width < 768 ? 1 : width < 1024 ? 2 : 3;
    }
  }

  createTestimonialGroups(): void {
    this.testimonialGroups = [];
    // Créer des groupes de témoignages selon displayCount
    for (let i = 0; i < this.testimonials.length; i += this.displayCount) {
      this.testimonialGroups.push(this.testimonials.slice(i, i + this.displayCount));
    }
    this.totalSlides = this.testimonialGroups.length;
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.totalSlides) {
      this.currentIndex = index;
      this.resetAutoSlide();
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide toutes les 5 secondes
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
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalSlides - 1;
    }
  }

  // Pour arrêter l'auto-slide quand l'utilisateur interagit
  pauseAutoSlide(): void {
    this.stopAutoSlide();
  }

  // Pour reprendre l'auto-slide après l'interaction
  resumeAutoSlide(): void {
    this.startAutoSlide();
  }
}