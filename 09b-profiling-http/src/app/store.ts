export interface Store {
  contacts?: Contact[];
  groups?: Group[];
}

export interface Contact {
  id: number;
  name: string;
}

export interface Group {
  id: number;
  name: string;
}

export const store: Store = {
  contacts: undefined,
  groups: undefined,
};
