import {Component, HostListener} from '@angular/core';
import {PanelComponent} from './panel/panel.component';
import {ButtonComponent} from './button/button.component';

@Component({
  selector: 'app-root',
  imports: [
    PanelComponent,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
  }

  @HostListener('click')
  onClick() {
    console.log("App clicked");
  }

  inc() {
  }
}
