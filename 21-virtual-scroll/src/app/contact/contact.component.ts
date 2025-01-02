import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ComponentBase, Contact, nextComponentId} from '../common';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent extends ComponentBase {
  @Input() contact!: Contact;
}