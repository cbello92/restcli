'use client';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {ProviderWrapper} from '../redux/providers';

const darkTheme = createTheme({palette: {mode: 'dark'}});

const RootLayout = ({children}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body style={{overflow: 'hidden', background: '#1c1818'}}>
        <CssBaseline />
        <ThemeProvider theme={darkTheme}>
          <Container maxWidth={false} style={{width: '100vw', height: '100vh', padding: 0, margin: 0}}>
            <ProviderWrapper>{children}</ProviderWrapper>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
