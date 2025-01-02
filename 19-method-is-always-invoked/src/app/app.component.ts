import {Component} from '@angular/core';
import {Contact, createContacts} from './common';
import {ContactComponent} from './contact/contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {FormsModule} from '@angular/forms';
import {TrimPipe} from './trim.pipe';

@Component({
  selector: 'app-root',
  imports: [
    ContactComponent,
    ContactListComponent,
    FormsModule,
    TrimPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  filter: string = "";

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = createContacts(0, 1000);
    this.filteredContacts = this.contacts;
  }

  // filterChanged() {
  //   this.filteredContacts = this.contacts.filter(contact => contact.name.includes(this.filter.trim()));
  // }
  onInputChanged() {

  }

  onKeyDown($event: KeyboardEvent) {
    console.log("onKeyDown", $event.key);
  }
}
