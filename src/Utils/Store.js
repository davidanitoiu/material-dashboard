import { configureStore } from '@reduxjs/toolkit';
import themeColor, { initialState as initialThemeColor } from '@reducers/ThemeColor';
import cardContent, { initialState as initialCardContent } from '@reducers/CardContent';
import chartContent, { initialState as initialChartContent } from '@reducers/ChartContent';
import { reduxBatch } from '@manaflair/redux-batch';

const initialState = {
    ...initialThemeColor,
    ...initialCardContent,
    ...initialChartContent
};

const reducer = {
    cardContent,
    chartContent,
    themeColor
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: [reduxBatch]
})

export default store;