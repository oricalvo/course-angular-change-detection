import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {ComponentBase, Contact} from '../common';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-contact-list',
  imports: [
    ContactComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent extends ComponentBase {
  @Input() contacts!: Contact[];

  constructor(public cdr: ChangeDetectorRef) {
    super();
  }

  detach() {
    this.cdr.detach();
  }

  attach() {
    this.cdr.reattach();
  }

  detect() {
    this.cdr.detectChanges();
  }

  mark() {
    this.cdr.markForCheck();
  }
}
