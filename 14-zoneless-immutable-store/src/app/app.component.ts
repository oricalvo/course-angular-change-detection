import {Component, inject} from '@angular/core';
import {Contact, getStore, UpdateStore, UpdateStoreToken} from './store';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  updateStore = inject(UpdateStoreToken);
  httpClient = inject(HttpClient);

  constructor() {
  }

  get store() {
    return getStore();
  }

inc() {
  this.updateStore(store => ({
    ...store,
    counter: store.counter + 1,
  }));
}

  load() {
    this.updateStore(async store => {
      const contacts = await this.httpClient.get<Contact[]>("http://localhost:4000/contact").toPromise();

      return {
        ...store,
        contacts,
      }
    });
  }
}
