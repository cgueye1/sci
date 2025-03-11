import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats = [
    { 
      value: '3',
      label: "ans d'experience"
    },
    { 
      value: '27',
      label: "Biens"
    },
    { 
      value: '50k',
      label: "Clients"
    },
    { 
      value: '800+',
      label: "Avis positifs"
    }
  ];
}