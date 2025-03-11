import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  
  // Liens du footer organisés par section
  infoLinks = [
    { label: 'FAQ', path: '/faq' },
    { label: 'Témoignages', path: '/temoignages' },
    { label: 'Partenaires', path: '/partenaires' }
  ];
  
  serviceLinks = [
    { label: 'VEFA', path: '/vefa' },
    { label: 'Copropriété', path: '/copropriete' },
    { label: 'Location', path: '/location' },
    { label: 'Prestations', path: '/prestations' }
  ];
  
  menuLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Nos services', path: '/services' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Nous contacter', path: '/contact' },
    { label: 'Nos plateformes', path: '/plateformes' }
  ];
  
  socialLinks = [
    { label: 'Instagram', path: 'https://instagram.com/sci', icon: 'instagram' },
    { label: 'LinkedIn', path: 'https://linkedin.com/company/sci', icon: 'linkedin' },
    { label: 'Facebook', path: 'https://facebook.com/sci', icon: 'facebook' },
    { label: 'Youtube', path: 'https://youtube.com/sci', icon: 'youtube' },
    { label: 'Twitter', path: 'https://twitter.com/sci', icon: 'twitter' }
  ];
  
  onSubmit() {
    if (this.emailControl.valid) {
      // Logique d'inscription à la newsletter
      console.log('Email soumis:', this.emailControl.value);
      // Réinitialiser le formulaire après soumission
      this.emailControl.reset();
    }
  }
}