import {Component} from '@angular/core';
import {Contact, createContacts} from './common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    ScrollingModule,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contacts: Contact[] = [];

  ngOnInit() {
    this.contacts = createContacts(0, 10000);
  }

  run() {
  }
}
