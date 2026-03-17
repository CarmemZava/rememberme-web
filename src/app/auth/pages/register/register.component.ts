import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../layout/auth-layout/auth-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    ReactiveFormsModule,
    FormInputComponent,
    ButtonComponent,
    RouterLink
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl("",Validators.required),
      email: new FormControl("",[ Validators.required, Validators.email]),
      password: new FormControl("",[ Validators.required, Validators.minLength(6)])
    })
  }

  register(){
    console.log(this.registerForm.value)
  }

}
