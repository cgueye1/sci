import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'assets/images/vefa.png',
      title: 'VENTE EN L\'ÉTAT FUTUR<br>D\'ACHÈVEMENT',
      description: 'Achetez un bien neuf sur plan et <br> personnalisez-le selon vos envies ! Avec la VEFA, vous bénéficiez de garanties solides et d\'un paiement échelonné selon l\'avancement des travaux.'
    },
    {
      icon: 'assets/images/work.png',
      title: 'NOS PRESTATAIRES DE <br>CONFIANCE',
      description: 'Nous collaborons avec des artisans <br>qualifiés (plombiers, électriciens, peintres...) pour vous accompagner dans l\'entretien et l\'amélioration de votre bien.'
    },
    {
      icon: 'assets/images/home.png',
      title: 'GESTION DE COPROPRIÉTÉ <br>SIMPLIFIÉE ET EFFICACE',
      description: 'Nous assurons une gestion transparente <br> et optimisée de votre copropriété. De l\'entretien des parties communes à la gestion administrative et financière, nous veillons à la valorisation de votre bien et au bien-être des résidents.'
    },
    {
      icon: 'assets/images/ownership.png',
      title: 'SERVICE DE LOCATION <br>FLEXIBLE ET ACCÉSSIBLE',
      description: 'Trouvez votre logement en toute  <br>sérénité ! Nous offrons des solutions de location adaptées à vos besoins, avec un accompagnement personnalisé et des démarches simplifiées pour une expérience fluide et sans stress.'
    }
  ];
}