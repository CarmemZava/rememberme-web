import { NgClass } from '@angular/common';
import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  // @Input() variant: 'primary' | 'auth' | 'secondary' = 'primary';

  @Input() 
  set variant(value: 'primary' | 'auth' | 'secondary') {
    console.log('Variant recebido:', value);
    this._variant = value;
  }
  get variant() {
    return this._variant;
  }
  private _variant: 'primary' | 'auth' | 'secondary' = 'primary';

}
