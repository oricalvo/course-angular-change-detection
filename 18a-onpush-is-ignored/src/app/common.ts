import {ApplicationRef, ElementRef, HostBinding, inject, Injectable, NgZone} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

export function profileTick() {
  const appRef: any = inject(ApplicationRef);

  console.log("profileTick");

  const originalTick = appRef._tick;

  let count = 0, sum = 0, max = 0, min = Number.MAX_VALUE, avg = 0;
  appRef._tick = function () {
    const before = performance.now();
    originalTick.apply(this, arguments as any);
    const time = performance.now() - before;

    ++count;
    sum += time;

    if (time > max) {
      max = time;
    }

    if (time < min) {
      min = time;
    }

    avg = sum / count;

    console.log(`TICK count: ${count.toFixed(0)}, avg: ${avg.toFixed(2)}, max: ${max.toFixed(2)}, min: ${min.toFixed(2)}, last: ${time.toFixed(2)}`);
  }
}

export function profileHttp() {
  let count = 0, sum = 0, pending = 0, max = 0, min = Number.MAX_VALUE;

  function dump() {
    const avg = sum / count;
    console.log(`HTTP count:${count}, pending:${pending}, avg:${avg.toFixed(2)}, max:${max.toFixed(2)}, min:${min.toFixed(2)}`);
  }

  return function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    let before: number = 0;

    return next(req).pipe(tap(event => {
      if (event.type === HttpEventType.Sent) {
        before = performance.now();
        ++pending;
        dump();
      }

      if (event.type === HttpEventType.Response) {
        const time = performance.now() - before;

        ++count;
        --pending;
        sum += time;

        if (time > max) {
          max = time;
        }

        if (time < min) {
          min = time;
        }

        dump();
      }
    }));
  }
}

export interface Contact {
  id: number;
  name: string;
}

export function createContacts(count: number): Contact[] {
  const res: Contact[] = [];

  for (let i = 1; i <= count; i++) {
    res.push({
      id: i,
      name: "name" + i,
    })
  }

  return res;
}

let compId = 1

export function nextComponentId() {
  return compId++;
}

@Injectable()
export abstract class ComponentBase {
  id: string;
  checked: number = 0;

  constructor(private element: ElementRef) {
    const typeName = this.constructor.name.replace(/_/g, "").replace(/Component/g, "");
    this.id = typeName + nextComponentId();
  }

  ngDoCheck() {
    console.log("ngDoCheck", this.id);

    ++this.checked;
    const checked = this.element.nativeElement.querySelector(".checked");
    if (checked) {
      checked.textContent = `${this.checked}`;
    }
  }
}

@Injectable()
export class ComponentContext {
  components: {level: number}[] = [];

  constructor() {
  }

  push(component: {level: number}) {
    this.components.push(component);
  }

  pop(component: {level: number}) {
    if(this.components.at(-1) == component) {
    this.components.pop();
    }
  }

  current() {
    return this.components.at(-1);
  }
}
