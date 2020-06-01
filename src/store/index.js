import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeColor,cardContent,chartContent } from './reducers';
import { reduxBatch } from '@manaflair/redux-batch';

const reducer = combineReducers({
    cardContent,
    chartContent,
    themeColor
});

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch]
})

export default store;