import {configureStore} from '@reduxjs/toolkit';
import habitsReducer from './habit-slice'

const appStore = configureStore({
    reducer: {
        habits: habitsReducer,
    }
})

export default appStore;
