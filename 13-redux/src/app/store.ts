import {
  Action,
  AnyAction,
  configureStore,
  createAsyncThunk,
  createSlice,
  Dispatch, Middleware, MiddlewareAPI,
  PayloadAction, Store, UnknownAction
} from '@reduxjs/toolkit';

export interface Contact {
  id: number;
  name: string;
}

export interface AppState {
  counter: number;
  contacts: Contact[];
}

const initialState: AppState = {
  counter: 0,
  contacts: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState.counter,
  reducers: {
    inc: state => {
      return state + 1;
    },
  },
});

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    set: (state, action: PayloadAction<Contact[]>) => {
      return action.payload;
    },
  }
});

export function fetchContacts() {
  return async function fetchTodoByIdThunk(dispatch: AppDispatch, getState: AppGetState) {
    const contacts = await (await fetch('http://localhost:4000/contact')).json();
    dispatch(contactSlice.actions.set(contacts));
  }
}

const changeDetectionMiddleware = ((store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
  console.log("action", action);
  const result = next(action);

  if(result instanceof Promise) {
    result.then(()=> {
    });
  }

  console.log("result", result);
  return result;
}) as Middleware;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    contacts: contactSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().prepend(changeDetectionMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
