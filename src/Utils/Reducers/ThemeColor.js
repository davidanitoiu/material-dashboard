import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
    themeColor: {
        primary: 'indigo',
        accent: 'yellow',
        type: 'light'
    },
}

const changeMode = mode => mode === 'dark' ? 'light' : 'dark';
export const setPrimaryColor = createAction('themeColor/setPrimary');
export const setAccentColor = createAction('themeColor/setAccent');
export const toggleDark = createAction('themeColor/toggle');

const themeReducer = createReducer(initialState, {
    [setPrimaryColor]: (state, { payload }) => { state.primary = payload },
    [setAccentColor]: (state, { payload }) => { state.accent = payload },
    [toggleDark]: state => { state.type = changeMode(state.type) },
});

export default themeReducer;