import { Component } from '@angular/core';
import { AuthLayoutComponent } from "../../layout/auth-layout/auth-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DashboardLayoutComponent } from '../../../dashboard/layout/dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent,
    ReactiveFormsModule,
    FormInputComponent,
    ButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForms!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {
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
        console.log("Sucessfull Login", response);
        this.toastrService.success("Login completed successfully!");
        // this.router.navigate['/dashboard']; verificar qual a rota correta 
      },
      error: (error) => {
        console.error('Error', error);
        const message = error.error?.message || "Error logging in, please try again!";
        this.toastrService.error(message);

      }
    })
  }

}
