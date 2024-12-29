import {Component, NgZone} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {store} from './store';
import {createIncButton} from './common';
import {PanelComponent} from './panel/panel.component';
import {FormComponent} from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [
    PanelComponent,
    FormComponent
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

  onFormInc() {
    console.log("App inc");

    store.counter++;
  }
}

declare const Zone: any;
