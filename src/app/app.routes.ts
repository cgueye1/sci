import { Routes } from '@angular/router';
import path from 'path';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
    {
        path :"",component:AcceuilComponent,
        
    },
    { path: 'acceuil', component:AcceuilComponent },


    { path: '**', redirectTo: 'accueil' }

];
