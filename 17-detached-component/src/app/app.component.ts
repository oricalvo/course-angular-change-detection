import {Component} from '@angular/core';
import {Contact, createContacts} from './common';
import {ContactComponent} from './contact/contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactComponent,
    ContactListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pageIndex: number = 0;
  pageSize: number = 5;
  contacts: Contact[] = [];
  readonly maxPageIndex = 10;

  ngOnInit() {
    this.loadContacts();
  }

  next() {
    if (this.pageIndex == this.maxPageIndex - 1) {
      return;
    }

    ++this.pageIndex;

    this.loadContacts();
  }

  prev() {
    if (this.pageIndex == 0) {
      return;
    }

    --this.pageIndex;

    this.loadContacts();
  }

  loadContacts() {
    this.contacts = createContacts(this.pageIndex * this.pageSize + 1, (this.pageIndex + 1) * this.pageSize + 1);
  }
}
