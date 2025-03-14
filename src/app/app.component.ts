import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {NavbarComponent} from './features/navbar/navbar.component';
import { AboutComponent } from "./features/about/about.component";
import { ServicesComponent } from "./features/services/service.component";
import { TestmonialComponent } from "./features/testmonial/testmonial.component";
import { PlatformeComponent } from "./features/platforme/platforme.component";
import { ContactComponent } from "./features/contact/contact.component";
// import { PartnerComponent } from "./features/partner/partner.component";
import { FaqComponent } from "./features/faq/faq.component";
import { FooterComponent } from "./features/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebsiteSolimusV1';
}
