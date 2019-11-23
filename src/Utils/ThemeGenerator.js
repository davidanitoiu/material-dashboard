import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as materialColors from '@material-ui/core/colors';

export function createTheme({ primary, accent, type }) {
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

export const material = color => createMuiTheme({
  palette: {
    primary: materialColors[color],
  }
});

