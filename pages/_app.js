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


// import React from 'react';
// import { CacheProvider } from '@emotion/react';
// import { ThemeProvider, CssBaseline } from '@mui/material';

// import createEmotionCache from '../utility/createEmotionCache';
// import lightTheme from '../styles/theme/lightTheme';
// import '../styles/globals.css';

// const clientSideEmotionCache = createEmotionCache();

// const MyApp = (props) => {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

//   return (
//     <CacheProvider value={emotionCache}>
//       <ThemeProvider theme={lightTheme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </CacheProvider>
//   );
// };

// export default MyApp;