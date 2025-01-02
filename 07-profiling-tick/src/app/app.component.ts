import {Component} from '@angular/core';
import {noop} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
  }

  protected readonly noop = noop;
}

declare const Zone: any;
