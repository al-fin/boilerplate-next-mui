import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/mui/theme';
import Loading from '@components/Loading';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    // handle loading
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('findished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Boilerplate Next MUI</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? <Loading /> : <Component {...pageProps} />}
      </ThemeProvider>
    </React.Fragment>
  );
}
