import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Color from 'color';

export default function sidebarTheme(theme) {
    const accentColor = Color(theme.palette.primary.light).luminosity() > 0.65 ? theme.palette.primary.dark : theme.palette.primary.light;

    return responsiveFontSizes(createMuiTheme({
        palette: {
            type: 'dark',
        },
        overrides: {
            MuiListItem: {
                root: {
                    transition: theme.transitions.create(
                        ['backgroundColor'],
                        { duration: theme.transitions.duration.standard }
                    ),
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

    }));
}
