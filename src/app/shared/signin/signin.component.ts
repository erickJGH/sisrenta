import { Component } from '@angular/core';
import { GoogleSsoDirective } from '../../google-sso.directive';
import { Directive,HostListener } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "@firebase/auth";
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers:[GoogleSsoDirective,GoogleAuthProvider]
})
export class SigninComponent {

}
