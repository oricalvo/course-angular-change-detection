import {ApplicationRef, ChangeDetectorRef, InjectionToken} from '@angular/core';

export interface Store {
  counter: number;
  contacts?: Contact[];
}

export interface Contact {
  id: number;
  name: string;
}

const store: Store = {
  counter: 0,
  contacts: undefined,
};

export type UpdateStoreAction = (store: Store) => Promise<any> | any;
export type UpdateStore = (handler: UpdateStoreAction)=>void;
export const UpdateStoreToken = new InjectionToken<UpdateStore>("UpdateStore");

export function getStore() {
  return store;
}

export function provideDispatcher() {
  return {
    provide: UpdateStoreToken,
    deps: [ApplicationRef],
    useFactory: (appRef: ApplicationRef) => {
      return async (action: UpdateStoreAction) => {
        const cdr = appRef.components[0].changeDetectorRef;
        await action(store);
        cdr.markForCheck();
      }
    }
  }
}
