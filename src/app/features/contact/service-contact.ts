// Dans src/app/features/contact/service-contact.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
  
  // Exemple de méthode utilisant HttpClient
  sendContactForm(formData: any): Observable<any> {
    return this.http.post('your-api-endpoint', formData);
  }
}