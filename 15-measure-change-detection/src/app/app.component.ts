import {Component} from '@angular/core';
import {Contact, createContacts} from './common';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contacts: Contact[] = createContacts(10000);

  constructor() {
  }

  run() {

  }

  refresh() {
    this.contacts = createContacts(10000);
  }
}
