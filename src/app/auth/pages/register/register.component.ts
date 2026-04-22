import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../layout/auth-layout/auth-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    ReactiveFormsModule,
    FormInputComponent,
    ButtonComponent,
    RouterLink,

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  //   ngOnInit() {
  //   this.toastrService.success('Teste Toast');
  // }

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    
    const data = this.registerForm.value

    this.authService.register(data).subscribe({
      next: (response) => {
        console.log("Sucessfull register", response)
        this.toastrService.success("Registration completed successfully!")
      },
      error: (error) => {
        this.toastrService.error("Error registering, please try again!");
      }
    })
  }

}
