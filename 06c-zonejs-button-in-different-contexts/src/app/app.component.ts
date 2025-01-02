import {Component, NgZone} from '@angular/core';
import {store} from './store';
import {createIncButton} from './common';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private ngZone: NgZone) {
    createIncButton("AppComponent");

    ngZone.runOutsideAngular(() => {
      createIncButton("runOutsideAngular");
    });
  }

  get store() {
    return store;
  }
}

declare const Zone: any;
