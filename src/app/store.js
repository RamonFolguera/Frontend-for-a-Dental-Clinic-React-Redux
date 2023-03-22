
import { configureStore } from '@reduxjs/toolkit';


import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import userSlice from '../layout/userSlice';
import detailsSlice from '../layout/detailsSlice';
import appointmentSlice from '../layout/appointmentSlice';


const reducers = combineReducers({
    user: userSlice,
    details: detailsSlice,
    appointment: appointmentSlice
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