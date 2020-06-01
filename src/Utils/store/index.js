import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeColor } from '@reducers/ThemeColor';
import { cardContent } from '@reducers/CardContent';
import { chartContent } from '@reducers/ChartContent';
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