import { Component } from '@angular/core';
import { NavbarComponent } from "../features/navbar/navbar.component";
import { HomeComponent } from "../features/home/home.component";
import { AboutComponent } from "../features/about/about.component";
import { ServicesComponent } from "../features/services/service.component";
import { TestmonialComponent } from "../features/testmonial/testmonial.component";
import { PartnerComponent } from "../features/partner/partner.component";
import { ContactComponent } from "../features/contact/contact.component";
import { FaqComponent } from "../features/faq/faq.component";
import { FooterComponent } from "../features/footer/footer.component";
import { PlatformeComponent } from "../features/platforme/platforme.component";

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, ServicesComponent, TestmonialComponent, PartnerComponent, ContactComponent, FaqComponent, FooterComponent, PlatformeComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

}
