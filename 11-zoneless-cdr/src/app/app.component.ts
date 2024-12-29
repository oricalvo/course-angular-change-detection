import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  inc() {
    console.log("inc");

    setTimeout(()=> {
      this.counter++;

      this.cdr.markForCheck();
    }, 10);
  }
}
