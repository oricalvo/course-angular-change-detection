import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-panel',
  imports: [
    ButtonComponent
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Output() onInc = new EventEmitter();

  onButtonInc() {
    console.log("Panel inc");

    this.onInc.emit();
  }
}
