import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8559da',
      light: '#a17be8',
      dark: '#6745ae',
    },
    secondary: {
      main: '#1db9c3',
      light: '#4fd0d9',
      dark: '#0e8e97',
    },
    background: {
      default: '#121929',
      paper: '#1a223a',
      darker: '#141b2d',
      lighter: '#2e375f',
      active: '#222d4e',
      hover: '#1c2642',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b4b6c4',
      disabled: '#6c7a93',
      hint: '#8c93ad',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#03a9f4',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: 'none',
          padding: '8px 16px',
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          border: 'none',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '4px 0',
          '&.Mui-selected': {
            backgroundColor: '#222d4e',
          },
        },
      },
    },
  },
});

export default theme;