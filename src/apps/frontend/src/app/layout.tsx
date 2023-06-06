'use client';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {ProviderWrapper} from '../redux/providers';

const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {backgroundColor: '#2b2b2b'},
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#6b6b6b',
            minHeight: 24,
            border: '5px solid #2b2b2b',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {backgroundColor: '#959595'},
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {backgroundColor: '#959595'},
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {backgroundColor: '#959595'},
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {backgroundColor: '#2b2b2b'},
        },
      },
    },
  },
  palette: {mode: 'dark'},
});

const RootLayout = ({children}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body style={{background: '#1c1818', overflow: 'auto', padding: 0, margin: 0, height: '100%'}}>
        <CssBaseline />
        <ThemeProvider theme={darkTheme}>
          <Container maxWidth={false} style={{padding: 0, margin: 0}}>
            <ProviderWrapper>{children}</ProviderWrapper>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
