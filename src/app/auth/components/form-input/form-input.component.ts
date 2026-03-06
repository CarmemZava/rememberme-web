import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ControlContainer } from '@angular/forms';

// Type declaration 
type InputType = "text" | "email" | "password"

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  viewProviders: [
  {
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }
]
})
export class FormInputComponent {
  @Input() type: InputType = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
}
