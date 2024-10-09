import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='/simple-next-app/favicon.ico' />
                <Script src='/simple-next-app/script' strategy='beforeInteractive' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
