// faq.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'Comment contacter SCI Immobilier ?',
      answer: 'Vous pouvez nous contacter par téléphone au 01 23 45 67 89, par email à contact@sciimmobilier.fr, ou via le formulaire de contact sur notre site web.',
      isOpen: false,
    },
    {
      question: 'Comment fonctionne la gestion locative chez SCI ?',
      answer: 'Notre service de gestion locative prend en charge la recherche de locataires, la rédaction des baux, létat des lieux, le quittancement, ainsi que le suivi des travaux et des interventions techniques.',
      isOpen: false,
    },
    {
      question: 'Comment obtenir une estimation immobilière ?',
      answer: 'Faites une demande en ligne ou contactez-nous pour une estimation gratuite et personnalisée.',
      isOpen: true,
    },
    {
      question: 'Comment puis-je postuler pour un bien en location ?',
      answer: 'Pour postuler à un bien en location, vous devez constituer un dossier comprenant vos justificatifs de revenus, didentité et de domicile actuel. Vous pouvez déposer votre dossier en ligne ou directement dans nos agences.',
      isOpen: false,
    },
    {
      question: 'Est-ce que vous gérez les travaux de rénovation ?',
      answer: 'Oui, nous proposons un service de gestion de travaux de rénovation pour les propriétaires. Nous sélectionnons les artisans, suivons lavancement des travaux et vérifions la qualité des prestations.',
      isOpen: false,
    },
  ];

  toggleItem(item: FaqItem): void {
    item.isOpen = !item.isOpen;
  }
}