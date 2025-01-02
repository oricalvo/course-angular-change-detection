import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
  }

  noop() {
  }

  startTimer() {
    setInterval(()=> {
    }, 1000);
  }
}
