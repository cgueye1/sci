import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

/**
 * Interface représentant un service immobilier
 */
interface plateformesService {
  id: number;
  libeller:string;
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

  isVisible = true;

toggleVisibility() {
  this.isVisible = !this.isVisible;
}
  
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
      libeller:'VEFA', 
      title: 'Plateforme  de  VEFA',
      description: 'Découvrez votre futur chez-vous en avant-première ! Trouvez le bien idéal en VEFA en quelques clics. Visitez notre site dès maintenant !',
      image: 'assets/images/vefa.jpeg',
      altText: 'Signature d\'un contrat VEFA avec plan architectural',
      priority:true
    },
    {
      id: 2,
      libeller:'LOCATION', 
      title: 'Location',
      description: 'Trouvez votre prochain chez-vous en un clic ! Découvrez des appartements et maisons en location qui correspondent à vos envies !',
      image: 'assets/images/room.jpg',
      altText: 'Intérieur d\'un appartement moderne à louer',
      priority:false
    },
    {
      id: 3,
      libeller:'SERVICE', 
      title: 'Platefome de VEFA ',
      description: 'Besoin d’un expert pour votre projet ? Notre plateforme regroupe les meilleurs prestataires, prêts à vous accompagner.',
      image: 'assets/images/menuisier.jpg',
      altText: 'Travailleur effectuant des réparations de maintenance',
      priority:true
    },
    {
      id: 4,
      libeller:'Copropriété', 
      title: 'Copropriété',
      description: 'Gérez votre immeuble facilement, rapidement et sans prise de tête grâce à notre plateforme en ligne.',
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