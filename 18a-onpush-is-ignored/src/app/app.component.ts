import {Component} from '@angular/core';
import {PanelComponent} from './panel/panel.component';
import {ComponentContext} from './common';

@Component({
  selector: 'app-root',
  imports: [
    PanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    ComponentContext,
  ]
})
export class AppComponent {
  timeoutId: number = 0;
  level = 8;

  constructor(private context: ComponentContext) {
  }

  ngOnInit() {
    this.context.push(this);
  }

  ngAfterViewInit() {
    this.context.pop(this);
  }

  start() {
    if(this.timeoutId) {
      return;
    }

    this.timeoutId = setInterval(() => {
      console.log("timer");
    }, 1000);
  }

  stop() {
    if (!this.timeoutId) {
      return;
    }

    clearInterval(this.timeoutId);
    this.timeoutId = 0;
  }
}
