import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F15B5D',
      dark: '#F15B5D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#87CAFE',
      dark: '#87CAFE',
      contrastText: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export default theme;
