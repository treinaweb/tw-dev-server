import React, { useEffect } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core';

import '@styles/globals.scss';
import { AppContainer } from '@styles/pages/_app.styled';
import theme from 'ui/themes/theme';
import Header from 'ui/components/surfaces/Header/Header';
import Footer from 'ui/components/surfaces/Footer/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        document.querySelector('#jss-server-side')?.remove();
    }, []);

    return (
        <>
            <Head>
                <title>
                    TreinaWeb Dev Server
                    {pageProps?.title && ` - ${pageProps?.title}`}
                </title>
            </Head>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </AppContainer>
            </ThemeProvider>
        </>
    );
};

export default App;
