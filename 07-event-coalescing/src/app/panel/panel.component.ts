import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent) {
    console.log('Panel clicked');
  }
}
