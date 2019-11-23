import { SET_THEME_COLOR, SET_PRIMARY_COLOR, SET_ACCENT_COLOR, TOGGLE_THEME } from '@actions/ThemeColor';

export const initialState = {
    themeColor: {
        primary: 'indigo',
        accent: 'yellow',
        type: 'light'
    },
}

function toggleType(type) {
    return type === 'dark' ? 'light' : 'dark';
}

function themeReducer(state = initialState, action) {
    const themeColor = { ...state };
    switch (action.type) {
        case SET_PRIMARY_COLOR:
            themeColor.primary = action.color;
            return themeColor;
        case SET_ACCENT_COLOR:
            themeColor.accent = action.color;
            return themeColor;
        case SET_THEME_COLOR:
            themeColor.primary = action.primary;
            themeColor.accent = action.accent;
            return themeColor;
        case TOGGLE_THEME:
            themeColor.type = toggleType(themeColor.type);
            return themeColor;
        default:
            return themeColor;
    }
}

export default themeReducer;