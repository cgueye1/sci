import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  stats = [
    {
      value: '3',
      label: "ans d'experience",
      finalValue: 3,
      currentValue: 0
    },
    {
      value: '27',
      label: "Biens",
      finalValue: 27,
      currentValue: 0
    },
    {
      value: '50k',
      label: "Clients",
      finalValue: 50000,
      currentValue: 0,
      isK: true
    },
    {
      value: '800+',
      label: "Avis positifs",
      finalValue: 800,
      currentValue: 0,
      isPlus: true
    }
  ];

  ngOnInit(): void {
    // Vérifier que nous sommes dans un environnement navigateur avant d'utiliser IntersectionObserver
    if (isPlatformBrowser(this.platformId)) {
      // Délai pour s'assurer que le DOM est prêt
      setTimeout(() => {
        this.setupIntersectionObserver();
      }, 500);
    } else {
      // Si nous sommes en SSR, définir directement les valeurs finales sans animation
      this.setFinalValues();
    }
  }

  private setupIntersectionObserver(): void {
    // Observer d'intersection pour déclencher l'animation lorsque la section est visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Observer la section des statistiques
    const statsElement = document.querySelector('.stats-container');
    if (statsElement) {
      observer.observe(statsElement);
    } else {
      // Fallback si l'élément n'est pas trouvé
      this.animateNumbers();
    }
  }

  // Définir les valeurs finales sans animation (pour SSR)
  private setFinalValues(): void {
    this.stats.forEach(stat => {
      if (stat.isK) {
        stat.value = Math.floor(stat.finalValue / 1000) + 'k';
      } else {
        stat.value = stat.finalValue.toString();
      }
      
      if (stat.isPlus) {
        stat.value += '+';
      }
      
      stat.currentValue = stat.finalValue;
    });
  }

  animateNumbers(): void {
    this.stats.forEach(stat => {
      const duration = 2000; // Durée de l'animation en ms
      const steps = 50; // Nombre d'étapes
      const increment = stat.finalValue / steps;
      const interval = duration / steps;
      let counter = 0;
      
      const timer = setInterval(() => {
        counter++;
        stat.currentValue = Math.ceil(counter * increment);
        
        // Formater la valeur
        if (stat.isK && stat.currentValue >= 1000) {
          stat.value = Math.floor(stat.currentValue / 1000) + 'k';
        } else {
          stat.value = stat.currentValue.toString();
        }
        
        // Ajouter le + si nécessaire
        if (stat.isPlus) {
          stat.value += '+';
        }
        
        // Arrêter l'animation quand on atteint la valeur finale
        if (counter >= steps) {
          clearInterval(timer);
          // S'assurer que la valeur finale est exactement celle attendue
          if (stat.isK) {
            stat.value = Math.floor(stat.finalValue / 1000) + 'k';
          } else {
            stat.value = stat.finalValue.toString();
          }
          
          if (stat.isPlus) {
            stat.value += '+';
          }
        }
      }, interval);
    });
  }
}