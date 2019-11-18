import { SET_THEME_COLOR, SET_PRIMARY_COLOR, SET_ACCENT_COLOR } from '@actions/ThemeColor';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as materialColors from '@material-ui/core/colors';

export const initialState = {
    themeColor: {
        primary: 'indigo',
        accent: 'yellow'
    },
    theme: setTheme('indigo', 'yellow')
}

function setTheme(primary, accent) {
    return responsiveFontSizes(createMuiTheme({
        palette: {
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
                    accent: state.themeColor.accent
                },
                theme: setTheme(action.color, state.themeColor.accent)
            };
        case SET_ACCENT_COLOR:
            return {
                themeColor: {
                    primary: state.themeColor.primary,
                    accent: action.color
                },
                theme: setTheme(state.themeColor.primary, action.color)
            };
        case SET_THEME_COLOR:
            return {
                themeColor: {
                    primary: action.primary,
                    accent: action.accent
                },
                theme: setTheme(action.primary, action.accent)
            }
        default:
            return state;
    }
}

export default themeReducer;