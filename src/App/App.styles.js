import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as materialColors from '@material-ui/core/colors';

/* Material Colors
amber, 
blue: 
blueGrey: 
brown: 
cyan: 
deepOrange: 
deepPurple: 
green: 
grey: 
indigo: 
lightBlue: 
lightGreen: 
lime: 
orange: 
pink: 
purple: 
red: 
teal: 
yellow: 
*/

const primary = 'purple';
const accent = 'indigo';

const theme = createMuiTheme({
  palette: {
    primary: materialColors[primary],
    secondary: materialColors[accent],
    action: {
      selected: materialColors[primary][400],
      hover: materialColors[primary][100],
      disabled: '#BDBDBD',
    }
  }
});

export const material = color => createMuiTheme({
  palette: {
    primary: materialColors[color],
  }
});

export default responsiveFontSizes(theme);