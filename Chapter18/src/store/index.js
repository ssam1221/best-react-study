// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';
import counterSlice from './counter';


const store = configureStore({
    reducer: {
        counter: counterReducer.reducer,
        auth: authReducer.reducer
    }
});

export const counterActions = counterSlice.actions;

export default store;