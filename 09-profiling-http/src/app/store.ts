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
