// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../slices/notesSlice';
import authReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
    user: userReducer,
  },
});
;



