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
    switch (action.type) {
        case SET_PRIMARY_COLOR:
            return {
                themeColor: {
                    primary: action.color,
                    accent: state.themeColor.accent,
                    type: state.themeColor.type
                },
            };
        case SET_ACCENT_COLOR:
            return {
                themeColor: {
                    primary: state.themeColor.primary,
                    accent: action.color,
                    type: state.themeColor.type
                },
            };
        case SET_THEME_COLOR:
            return {
                themeColor: {
                    primary: action.primary,
                    accent: action.accent,
                    type: state.themeColor.type
                },
            }
        case TOGGLE_THEME:
            return {
                themeColor: {
                    primary: state.themeColor.primary,
                    accent: state.themeColor.accent,
                    type: toggleType(state.themeColor.type)
                },
            }
        default:
            return state;
    }
}

export default themeReducer;