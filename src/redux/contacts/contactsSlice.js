import { fetchContacts } from 'api';
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage"
import { createSlice } from '@reduxjs/toolkit';

const arrayContacts = () => {
  console.log(fetchContacts().then(data=> console.log(data)))
}



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: [],
  },
  reducers: {
    change(state, action) {
      
      state.array = action.payload;
      console.log(action.payload)
    }
  },
});

arrayContacts()

const persistConfig = {
    key: "contactsArray",
    storage,
    whitelist: ["array"]
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { change } = contactsSlice.actions;