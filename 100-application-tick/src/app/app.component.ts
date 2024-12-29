import { Component } from '@angular/core';
import { generateContacts } from '@cdr/common/dist/test-utils';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter: number = 0;
  contacts = generateContacts(10000);

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  inc() {
    ++this.counter;
  }
}

interface Contact {
  id: number;
  name: string;
}
