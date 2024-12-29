import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {counterSlice, fetchContacts, store} from './store';

@Component({
  selector: 'app-root',
  imports: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  httpClient = inject(HttpClient);

  constructor() {
  }

  get store() {
    return store.getState();
  }

  inc() {
    console.log("inc");

    store.dispatch(counterSlice.actions.inc());
  }

  load() {
    store.dispatch(fetchContacts());
  }
}
