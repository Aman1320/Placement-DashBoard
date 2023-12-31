import { createMuiTheme } from '@material-ui/core/styles';
import typography from './Typography';

// ##############################
// // // Global Variables
// ##############################
const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  direction:"ltr",
  palette: {
    primary: {
      main: "#383e56",
    },
    secondary: {
      main: '#f64e60',
    },

  },
  status: {
    danger: '#e53e3e',
  },
  overrides: {
    MuiToolbar: {
      gutters: {
        [defaultTheme.breakpoints.up('sm')]: {
          paddingLeft: '15px',
          paddingRight: '15px',
        },
      },
    },
  },
  typography,
});
const SidebarWidth = 240
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#26c6da";
const infoColor = "#6ac3fd";

export {theme, primaryColor, SidebarWidth, warningColor, dangerColor, successColor, infoColor};
