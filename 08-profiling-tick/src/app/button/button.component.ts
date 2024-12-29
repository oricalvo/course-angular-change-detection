import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() onInc = new EventEmitter();

  inc() {
    console.log("Button inc");

    this.onInc.emit();
  }
}
