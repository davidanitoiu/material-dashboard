import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as materialColors from '@material-ui/core/colors';
import Color from 'color';
import mainTheme from '@app/App.styles';

const accentColor = Color(mainTheme.palette.primary.light).luminosity() > 0.65 ? mainTheme.palette.primary.dark : mainTheme.palette.primary.light;

const sidebarTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: materialColors['yellow'],
        secondary: materialColors['purple'],
    },
    overrides: {
       MuiListItem: {
            root: {
                borderRadius: 7,
                '&$selected': {
                    backgroundColor: accentColor,
                    '&:hover': {
                        backgroundColor: accentColor,
                    }
                }
            },
            button: {
                '&:hover': {
                    backgroundColor: `${Color(accentColor).alpha(0.2)}`,
                }
            },
        }
    }

});

export default responsiveFontSizes(sidebarTheme);