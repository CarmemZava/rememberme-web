import { Component } from '@angular/core';
import { AuthLayoutComponent } from "../../layout/auth-layout/auth-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent,
    ReactiveFormsModule,
    FormInputComponent,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForms!: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForms = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  login() {
    if (this.loginForms.invalid) return
    const data = this.loginForms.value

    this.authService.login(data).subscribe({
      next: (response) => {
        console.log("Sucessfull Login", response)
      },
      error: (err) => {
        console.log('Error', err)
      }
    })
  }

}
