import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ComponentBase, Contact} from '../common';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-contact-list',
  imports: [
    ContactComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent extends ComponentBase {
  @Input() contacts!: Contact[];
  @Input() filter!: string;
  filteredContacts: Contact[] = [];
}
