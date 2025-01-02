import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {Contact, store} from './store';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
  }

  get store() {
    return store;
  }

  onFormInc() {
    console.log("App inc");

    store.counter++;
  }

  async load() {
    console.log("load - BEGIN");

    store.contacts = await this.httpClient.get<Contact[]>("http://localhost:4000/contact").toPromise();

    console.log("load - END");
  }
}

declare const Zone: any;
