import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  words = ['Achetez', 'Louez', 'Gérez'];
  currentWord = this.words[0]; // Initialisation avec le premier mot
  currentWordIndex = 0;
  private animationTimer: any;
  isAnimating = false; // Pour suivre l'état de l'animation


  // Cartes et positions initiales
  cards = [
    { image: 'assets/images/work.png', label: 'Prestataires' },
    { image: 'assets/images/home.png', label: 'Copropriété' },
    { image: 'assets/images/vefa.png', label: 'VEFA' },
    { image: 'assets/images/ownership.png', label: 'Services de location' },
  ];

  // Positions dynamiques pour chaque carte (ordre circulaire)
  positions = ['top-left', 'top-right', 'bottom-left'
, 'bottom-right'];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startWordAnimation();
      this.startCardAnimation();
    }
  }

  // Animation des mots (Achetez, Louez, Gérez)
  // startWordAnimation(): void {
  //   const animateWords = () => {
  //     this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
  //     this.animationTimer = setTimeout(animateWords, 2000); // Changer tous les 2s
  //   };
  //   this.animationTimer = setTimeout(animateWords, 2000);
  // }

  // Animation des mots avec effet descendant
startWordAnimation(): void {
  const animateWords = () => {
    this.isAnimating = true;
    
    // Ajouter une classe pour l'animation de sortie
    const wordElement = document.querySelector('.soustitre');
    if (wordElement) {
      wordElement.classList.add('word-exit');
      
      // Après l'animation de sortie, changer le mot et jouer l'animation d'entrée
      setTimeout(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.currentWord = this.words[this.currentWordIndex];
        
        // Réinitialiser les classes d'animation
        wordElement.classList.remove('word-exit');
        wordElement.classList.add('word-enter');
        
        // Supprimer la classe d'entrée après l'animation
        setTimeout(() => {
          wordElement.classList.remove('word-enter');
          this.isAnimating = false;
        }, 600); // Durée de l'animation d'entrée
      }, 600); // Durée de l'animation de sortie
    }
    
    this.animationTimer = setTimeout(animateWords, 3000); // Tempo total entre les changements
  };
  
  this.animationTimer = setTimeout(animateWords, 800); // Premier délai
}
  // Animation des positions des cartes
  startCardAnimation(): void {
    const animateCards = () => {
      this.positions.push(this.positions.shift()!); // Rotation circulaire des positions
      this.animationTimer = setTimeout(animateCards, 4000); // Changer toutes les 4s
    };
    this.animationTimer = setTimeout(animateCards, 4000);
  }

  // get currentWord(): string {
  //   return this.words[this.currentWordIndex];
  // }

  ngOnDestroy(): void {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  }
}
// 