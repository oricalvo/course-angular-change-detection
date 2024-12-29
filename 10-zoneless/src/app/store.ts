import {ApplicationRef, ChangeDetectorRef, InjectionToken} from '@angular/core';

export interface Store {
  counter: number;
  contacts?: Contact[];
}

export interface Contact {
  id: number;
  name: string;
}

export const store: Store = {
  counter: 0,
  contacts: undefined,
};

export type DispatchHandler = (store: Store) => any;

export const Dispatcher = new InjectionToken<(handler: DispatchHandler)=>void>("Dispatcher");

export function provideDispatcher() {
  return {
    provide: Dispatcher,
    deps: [ApplicationRef],
    useFactory: (appRef: ApplicationRef) => {
      let cdr: ChangeDetectorRef;

      return async function dispatch(action: (store: Store) => void) {
        if(!cdr) {
          cdr = appRef.components[0].changeDetectorRef;
        }

        try {
          await action(store);
          cdr.markForCheck();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
}

