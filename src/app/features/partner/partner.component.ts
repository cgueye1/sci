import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface LogoItem {
  id: number;
  name: string;
  imgSrc: string;
}

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements OnInit{
  // logos: LogoItem[] = [
  //   { id: 1, name: 'Name', imgSrc: 'assets/logos/logo1.svg' },
  //   { id: 2, name: 'Name', imgSrc: 'assets/logos/logo2.svg' },
  //   { id: 3, name: 'Name', imgSrc: 'assets/logos/logo3.svg' },
  //   { id: 4, name: 'Name', imgSrc: 'assets/logos/logo4.svg' },
  //   { id: 5, name: 'Name', imgSrc: 'assets/logos/logo5.svg' },
  //   { id: 6, name: 'Name', imgSrc: 'assets/logos/logo6.svg' }
  // ];

  visibleLogos: LogoItem[] = [];
  currentIndex = 0;
  itemsToShow = 4; // Nombre de logos à afficher à la fois
  autoplayInterval: any;

  ngOnInit(): void {
    // this.updateVisibleLogos();
    // this.startAutoplay();
    
    // Surveiller les changements de taille d'écran pour ajuster le nombre de logos
    // window.addEventListener('resize', this.handleResize.bind(this));
    // this.handleResize();
  }

  // ngOnDestroy(): void {
  //   this.stopAutoplay();
  //   window.removeEventListener('resize', this.handleResize.bind(this));
  // }
  
  // handleResize(): void {
  //   // Ajuster le nombre de logos affichés en fonction de la taille de l'écran
  //   if (window.innerWidth < 640) { // sm
  //     this.itemsToShow = 1;
  //   } else if (window.innerWidth < 768) { // md
  //     this.itemsToShow = 2;
  //   } else if (window.innerWidth < 1024) { // lg
  //     this.itemsToShow = 3;
  //   } else {
  //     this.itemsToShow = 4;
  //   }
  //   this.updateVisibleLogos();
  // }

  // updateVisibleLogos(): void {
  //   this.visibleLogos = [];
  //   for (let i = 0; i < this.itemsToShow; i++) {
  //     const index = (this.currentIndex + i) % this.logos.length;
  //     this.visibleLogos.push(this.logos[index]);
  //   }
  // }

  // nextSlide(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.logos.length;
  //   this.updateVisibleLogos();
  // }

  // prevSlide(): void {
  //   this.currentIndex = (this.currentIndex - 1 + this.logos.length) % this.logos.length;
  //   this.updateVisibleLogos();
  // }

  // startAutoplay(): void {
  //   this.autoplayInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 3000); // Changer toutes les 3 secondes
  // }

  // stopAutoplay(): void {
  //   if (this.autoplayInterval) {
  //     clearInterval(this.autoplayInterval);
  //   }
  // }

  // // Pause l'autoplay lorsque l'utilisateur interagit avec le carousel
  // pauseAutoplay(): void {
  //   this.stopAutoplay();
  // }

  // Reprendre l'autoplay lorsque l'utilisateur n'interagit plus
  // resumeAutoplay(): void {
  //   this.startAutoplay();
  // }
}


