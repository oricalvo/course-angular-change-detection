import {Component, NgZone} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {store} from './store';
import {createIncButton} from './common';
import {PanelComponent} from './panel/panel.component';

@Component({
  selector: 'app-root',
  imports: [
    PanelComponent
  ],
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

  inc() {
    console.log("Button clicked");
    store.counter++;
  }
}

declare const Zone: any;
