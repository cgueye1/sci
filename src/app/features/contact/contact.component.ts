import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from './service-contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ContactForm!: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = false;
contactForm: any;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private contactService: ContactService
  // ) {}

  // ngOnInit(): void {
  //   this.OninitFormn();
  // }

  // OninitForm(): void {
  //   this.ContactForm = this.formBuilder.group({
  //     nom: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //     message: ['', [Validators.required]]
  //   });
  // }

  // // Getter pour accéder facilement aux contrôles du formulaire
  // get f() {
  //   return this.ContactForm.controls;
  // }

  // onSubmit(): void {
  //   this.submitted = true;
  //   this.success = false;
  //   this.error = false;

  //   // Stop si le formulaire est invalide
  //   if (this.ContactForm.invalid) {
  //     return;
  //   }

  //   this.loading = true;

  //   this.contactService.sendContactForm(this.ContactForm.value)
      // .subscribe({
      //   next: () => {
      //     this.success = true;
      //     this.loading = false;
      //     this.ontactForm.reset();
      //     this.submitted = false;
      //   },
      //   error: (error: any) => {
      //     console.error('Erreur lors de l\'envoi du formulaire', error);
      //     this.error = true;
      //     this.loading = false;
      //   }
      // });
  }



