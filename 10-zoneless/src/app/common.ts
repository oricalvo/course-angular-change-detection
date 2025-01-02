import {store} from './store';
import {ApplicationRef, inject} from '@angular/core';
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

    console.log(`TICK count: ${count.toFixed(0)}, avg: ${avg.toFixed(2)}, max: ${max.toFixed(2)}, min: ${min.toFixed(2)}`);
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

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
