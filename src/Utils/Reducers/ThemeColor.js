import { SET_THEME_COLOR, SET_PRIMARY_COLOR, SET_ACCENT_COLOR, TOGGLE_THEME } from '@actions/ThemeColor';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as materialColors from '@material-ui/core/colors';

export const initialState = {
    themeColor: {
        primary: 'indigo',
        accent: 'yellow',
        type: 'light'
    },
    theme: setTheme('indigo', 'yellow', 'light')
}

function toggleType(type) {
    console.log(type);
    return type === 'dark' ? 'light' : 'dark';
}

function setTheme(primary, accent, type) {
    return responsiveFontSizes(createMuiTheme({
        palette: {
            type: type,
            primary: materialColors[primary],
            secondary: materialColors[accent],
            action: {
                selected: materialColors[primary][400],
                hover: materialColors[primary][100],
                disabled: '#BDBDBD',
            }
        }
    }));
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
                theme: setTheme(action.color, state.themeColor.accent, state.themeColor.type)
            };
        case SET_ACCENT_COLOR:
            return {
                themeColor: {
                    primary: state.themeColor.primary,
                    accent: action.color,
                    type: state.themeColor.type
                },
                theme: setTheme(state.themeColor.primary, action.color, state.themeColor.type)
            };
        case SET_THEME_COLOR:
            return {
                themeColor: {
                    primary: action.primary,
                    accent: action.accent,
                    type: state.themeColor.type
                },
                theme: setTheme(action.primary, action.accent, state.themeColor.type)
            }
        case TOGGLE_THEME:
            return {
                themeColor: {
                    primary: state.themeColor.primary,
                    accent: state.themeColor.accent,
                    type: toggleType(state.themeColor.type)
                },
                theme: setTheme(state.themeColor.primary, state.themeColor.accent, toggleType(state.themeColor.type))
            }
        default:
            return state;
    }
}

export default themeReducer;