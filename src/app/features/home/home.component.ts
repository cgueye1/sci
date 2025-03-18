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
    { image: 'assets/images/work.png', label: 'Prestataires', position: 'top-left' },
    { image: 'assets/images/home.png', label: 'Copropriété', position: 'top-right' },
    { image: 'assets/images/vefa.png', label: 'VEFA', position: 'bottom-right' },
    { image: 'assets/images/ownership.png', label: 'Services de location', position: 'bottom-left' },
  ];

  // Index actuel pour le contenu de chaque carte (mis à jour lors de l'animation)
  contentIndices = [0, 1, 2, 3];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startWordAnimation();
      this.startCardContentAnimation();
    }
  }

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

  // Animation du contenu des cartes (icônes et labels)
  startCardContentAnimation(): void {
    const animateCardContents = () => {
      // Faire tourner les indices de contenu
      this.contentIndices.unshift(this.contentIndices.pop()!);

      this.animationTimer = setTimeout(animateCardContents, 4000); // Changer toutes les 4s
    };
    this.animationTimer = setTimeout(animateCardContents, 4000);
  }

  // Getter pour obtenir le contenu de chaque carte selon sa position
  getCardContent(position: string) {
    const positionIndex = this.cards.findIndex(card => card.position === position);
    if (positionIndex >= 0) {
      const contentIndex = this.contentIndices[positionIndex];
      return {
        image: this.cards[contentIndex].image,
        label: this.cards[contentIndex].label
      };
    }
    return { image: '', label: '' };
  }

  ngOnDestroy(): void {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  }
}
