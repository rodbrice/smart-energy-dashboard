import { createTheme, ThemeOptions } from '@mui/material/styles';

const commonSettings: ThemeOptions = {
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0d47a1' },
    secondary: { main: '#ff9800' },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#fbc02d' },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  ...commonSettings,
});
