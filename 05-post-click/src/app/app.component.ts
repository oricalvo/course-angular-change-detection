import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  run() {
    Zone.run();

    console.log("run");

    setTimeout(()=>{
      console.log("123");
    }, 1000);
  }
}

declare const Zone: any;
