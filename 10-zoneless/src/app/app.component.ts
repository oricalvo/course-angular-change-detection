import {Component, inject} from '@angular/core';
import {Contact, Dispatcher, store} from './store';
import {HttpClient} from '@angular/common/http';
import {CounterComponent} from './counter/counter.component';
import {delay} from './common';

@Component({
  selector: 'app-root',
  imports: [
    CounterComponent
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

  syncInc() {
    store.counter++;
  }

  async asyncInc() {
    await delay(1000);

    store.counter++;
  }

  async load() {
    store.contacts = await this.httpClient.get<Contact[]>("http://localhost:4000/contact").toPromise();
  }
}
