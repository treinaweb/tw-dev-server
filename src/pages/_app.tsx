import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core';

import '@styles/globals.scss';
import { AppContainer } from '@styles/pages/_app.styled';
import theme from 'ui/themes/theme';
import Header from 'ui/components/surfaces/Header/Header';
import Footer from 'ui/components/surfaces/Footer/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>
                    TreinaWeb Dev Server
                    {pageProps?.title && ` - ${pageProps?.title}`}
                </title>
                <link
                    rel="icon"
                    href="tw-dev-server/img/favicon-treinaweb.ico"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                    crossOrigin="anonymous"
                />
            </Head>
            <AppContainer>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
