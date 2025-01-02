import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contact!: Contact;

  create() {
    this.contact = createContact();
  }

  update() {
    this.contact.name = "XXX";
  }
}

interface Contact {
  name: string;
  age: number;
  friend?: Contact;
}

function createContact(): Contact {
  const target: Contact = {
    name: 'Alice',
    age: 30
  };

  const handler = {
    get(target: any, property: any) {
      console.log(`Getting property "${property}"`);
      return property in target ? target[property] : undefined;
    },
    set(target: any, property: any, value: any) {
      console.log(`Setting property "${property}" to "${value}"`);
      target[property] = value;
      return true;
    },
  };

  return new Proxy(target, handler);
}

// const alice = createContact();
// alice.name;
// alice.age = 35;
