import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {Contact, store} from './store';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
  }

  get store() {
    return store;
  }

  async load() {
    console.log("load - BEGIN");

    // const [contacts, groups] = await Promise.all([
    //   this.httpClient.get<Contact[]>("http://localhost:4000/contact").toPromise(),
    //   this.httpClient.get<Contact[]>("http://localhost:4000/group").toPromise(),
    // ]);

    const {
      contacts,
      groups
    } = await this.httpClient.get<any>("http://localhost:4000/contactsAndGroups").toPromise();

    store.contacts = contacts;
    store.groups = groups;

    console.log("load - END");
  }
}

declare const Zone: any;
