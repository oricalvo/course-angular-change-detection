import {ApplicationRef, ChangeDetectorRef, InjectionToken} from '@angular/core';

export interface Store {
  counter: number;
  contacts?: Contact[];
}

export interface Contact {
  id: number;
  name: string;
}

let store: Store = {
  counter: 0,
  contacts: undefined,
};

export type StoreAction = (store: Store) => Promise<Store> | Store;
export type UpdateStore = (handler: StoreAction) => void;
export const UpdateStoreToken = new InjectionToken<UpdateStore>("UpdateStore");

export function getStore() {
  return store;
}

async function updateStore(appRef: ApplicationRef, action: StoreAction) {
  const cdr = appRef.components[0].changeDetectorRef;

  const newStore = await action(store);

  if (newStore !== store) {
    cdr.markForCheck();
    store = newStore;
  }
}

export function provideDispatcher() {
  return {
    provide: UpdateStoreToken,
    deps: [ApplicationRef],
    useFactory: (appRef: ApplicationRef) => {
      return updateStore.bind(undefined, appRef);
    }
  }
}
