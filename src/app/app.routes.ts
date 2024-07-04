import { Routes } from '@angular/router';
import { SigninComponent } from './shared/signin/signin.component';
import { LandingComponent } from './shared/landing/landing.component';

export const routes: Routes = [
    
    { path: "", component: LandingComponent },
  { path: "signin", component: SigninComponent },
    

];
