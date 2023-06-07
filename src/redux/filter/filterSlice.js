import {persistReducer} from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage"

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchValue: '',
  },
  reducers: {
    changeSearch(state, action) {
      state.searchValue = action.payload;
    }
  },
});

const persistConfig = {
    key: "filter",
    storage,
    whitelist: ["searchValue"]
}

// export const filterReducer = filterSlice.reducer;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const { changeSearch } = filterSlice.actions;