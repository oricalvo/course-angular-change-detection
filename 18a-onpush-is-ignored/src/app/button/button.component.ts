import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {ComponentBase} from '../common';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ComponentBase {
  @HostBinding('class.component') _: boolean = true;

  run() {

  }
}
