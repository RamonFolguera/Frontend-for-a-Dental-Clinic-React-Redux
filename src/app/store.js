
import { configureStore } from '@reduxjs/toolkit';


import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import userSlice from '../layout/userSlice';
import detailsSlice from '../layout/detailsSlice';


const reducers = combineReducers({
    user: userSlice,
    details: detailsSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});