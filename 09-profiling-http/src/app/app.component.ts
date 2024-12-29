import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Contact, store} from './store';
import {createIncButton} from './common';
import {PanelComponent} from './panel/panel.component';
import {FormComponent} from './form/form.component';
import {HttpClient} from '@angular/common/http';

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
  constructor(private ngZone: NgZone, private httpClient: HttpClient, private cdr: ChangeDetectorRef) {
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

  async load() {
    console.log("load");

    store.contacts = await this.httpClient.get<Contact[]>("http://localhost:4000/contact").toPromise();
  }
}

declare const Zone: any;
