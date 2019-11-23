import { configureStore } from '@reduxjs/toolkit';
import themeColor, { initialState as initialThemeColor } from '@reducers/ThemeColor';
import cardContent, { initialState as initialCardContent } from '@reducers/CardContent';
import { reduxBatch } from '@manaflair/redux-batch';

const initialState = {
    ...initialThemeColor,
    ...initialCardContent
};

const reducer = {
    cardContent: cardContent,
    themeColor: themeColor
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: [reduxBatch]
})

export default store;