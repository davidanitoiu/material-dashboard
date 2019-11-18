import { createMuiTheme } from '@material-ui/core/styles';
import * as materialColors from '@material-ui/core/colors';


export const material = color => createMuiTheme({
  palette: {
    primary: materialColors[color],
  }
});

