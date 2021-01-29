import { createMuiTheme } from '@material-ui/core';
import themeFunctions from './theme-functions';

const theme = createMuiTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7177ff',
        },
        secondary: {
            main: '#ff6fbe',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            //default: '#22212c',
            //paper: '#2b2640',
            default: '#343746',
            paper: '#282a36',
        },
        success: {
            main: '#4acea6',
        },
        error: {
            main: '#e255aa',
        },
        warning: {
            main: '#efbe39',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
