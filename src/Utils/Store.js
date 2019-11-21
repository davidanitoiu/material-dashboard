import { createStore, combineReducers } from 'redux';
import themeColor, { initialState as initialThemeColor } from '@reducers/ThemeColor';
import cardContent, { initialState as initialCardContent } from '@reducers/CardContent';

const initialState = {
    ...initialThemeColor,
    ...initialCardContent
};

const reducers = combineReducers({
    cardContent,
    themeColor
})

export default createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());