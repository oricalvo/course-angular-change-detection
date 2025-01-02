import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';
import {ComponentBase, nextComponentId, ComponentContext} from '../common';
import {ButtonComponent} from '../button/button.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-panel',
  imports: [
    ButtonComponent
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent extends ComponentBase {
  level!: number;

  @HostBinding('class.component') _: boolean = true;

  constructor(private context: ComponentContext, element: ElementRef, private cdr: ChangeDetectorRef) {
    super(element);
  }

  ngOnInit() {
    this.level = (this.context.current()?.level || 0) - 1;
    this.context.push(this);
  }

  ngAfterViewInit() {
    this.context.pop(this);
  }

  run() {

  }

  deatch() {
    this.cdr.detach();
  }
}
