import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ControlContainer } from '@angular/forms';


// Type declaration 
type InputType = "text" | "email" | "password"

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

  constructor(private controlContainer: ControlContainer) { }

  //Getter creates automatically getter for all the formName such as email, name e etc
  get control() {                               
    return this.controlContainer
      .control
      ?.get(this.formName)
  }


  @Input() type: InputType = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
}
