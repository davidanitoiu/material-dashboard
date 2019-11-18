import { createStore } from 'redux';
import ThemeColor, { initialState } from '@reducers/ThemeColor';

export default createStore(ThemeColor, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());