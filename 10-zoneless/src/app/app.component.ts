import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {Contact, Dispatcher, store} from './store';
import {HttpClient} from '@angular/common/http';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [
    CounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dispatch = inject(Dispatcher);

  constructor(private httpClient: HttpClient, public cdr: ChangeDetectorRef) {
  }

  get store() {
    return store;
  }

  inc() {
    console.log("inc");

    store.counter++;
  }

  load() {
    this.dispatch(async () => {
      store.contacts = await this.httpClient.get<Contact[]>("http://localhost:4000/contact").toPromise();
    });
  }
}
