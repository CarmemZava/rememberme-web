import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../layout/auth-layout/auth-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthLayoutComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
