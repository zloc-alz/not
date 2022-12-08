import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: [
      "Inter",
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#EDFBF4',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      "Inter",
      'Roboto',
      'sans-serif',
    ].join(','),
  },
})


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}

export default MyApp