import {Component, EventEmitter, Output} from '@angular/core';
import {PanelComponent} from '../panel/panel.component';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-form',
  imports: [
    PanelComponent,
    ButtonComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() onInc = new EventEmitter();

  onPanelInc() {
    console.log("Form inc");

    this.onInc.emit();
  }
}
