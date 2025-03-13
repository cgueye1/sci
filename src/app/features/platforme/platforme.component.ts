import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

/**
 * Interface représentant un service immobilier
 */
interface plateformesService {
  id: number;
  title: string;
  description: string;
  image: string;
  priority:boolean;
  altText:string;
}

/**
 * Interface représentant une application mobile
 */
interface MobileApp {
  platform: string;
  url: string;
  image:string;
}

/**
 * RealEstateComponent - Composant affichant les différentes plateformes de services immobiliers
 * 
 * Ce composant présente:
 * - Un titre et une description des services
 * - Une évaluation des utilisateurs
 * - Des liens de téléchargement d'applications
 * - Une grille de services immobiliers avec images
 */
@Component({
  selector: 'app-platforme',
  standalone: true,
  imports:[CommonModule,NgOptimizedImage],
  templateUrl: './platforme.component.html',
  styleUrls: ['./platforme.component.css']
})
export class PlatformeComponent {
  /**
   * Titre principal du composant
   */
  pageTitle: string = 'Visitez nos différentes plateformes';
  
  /**
   * Description détaillée des services offerts
   */
pageDescription: string = 'Retrouvez tous nos services immobiliers sur nos plateformes dédiées. Achat en VEFA, location, gestion de copropriété ou services de maintenance,accédez facilement à l\'offre qui vous correspond.';  
  /**
   * Note moyenne des utilisateurs (sur 5)
   */
  userRating: number = 4.5;
  
  /**
   * Nombre d'utilisateurs ayant donné leur avis
   */
  userCount: string = '200+';
  
  /**
   * Liste des applications mobiles disponibles au téléchargement
   */
  mobileApps: MobileApp[] = [
    {
      platform: 'iOS',
      url: 'https://apps.apple.com/',
      image: 'assets/images/apple.png'
    },
    {
      platform: 'Android',
      url: 'https://play.google.com/',
      image: 'assets/images/googleplay.png'
    }
  ];
  
  /**
   * Liste des services immobiliers proposés avec leurs images
   */
  realEstateServices: plateformesService[] = [
    {
      id: 1,
      title: 'Achat en VEFA',
      description: 'Achetez des biens immobiliers sur plan avec nos services dédiés',
      image: 'assets/images/vefa.jpeg',
      altText: 'Signature d\'un contrat VEFA avec plan architectural',
      priority:true
    },
    {
      id: 2,
      title: 'Location',
      description: 'Trouvez votre location idéale parmi notre sélection de biens',
      image: 'assets/images/room.jpg',
      altText: 'Intérieur d\'un appartement moderne à louer',
      priority:false
    },
    {
      id: 3,
      title: 'Platefome de VEFA ',
      description: 'Services professionnels de réparation et maintenance pour votre bien',
       image: 'assets/images/menuisier.jpg',
      altText: 'Travailleur effectuant des réparations de maintenance',
      priority:true
    },
    {
      id: 4,
      title: 'Copropriété',
      description: 'Solutions de gestion pour les copropriétés et résidences',
     image: 'assets/images/IMMO.jpeg',
      altText: 'Immeuble résidentiel moderne en copropriété',
      priority:true
    }
  ];
  
  /**
   * Ouvre l'URL de téléchargement d'application dans un nouvel onglet
   * @param url L'URL de téléchargement
   */
  downloadApp(url: string): void {
    window.open(url, '_blank');
  }
}