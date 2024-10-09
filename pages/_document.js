import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <Script id='mierucaOptimizejs' strategy='lazyOnload'>
                    {`window.__optimizeid = window.__optimizeid || [];__optimizeid.push([1163282239]);
            (function () {
              var fjs = document.createElement('script'); 
              fjs.type = 'text/javascript'; 
              fjs.async = true; 
              fjs.id = "fjssync"; 
              var timestamp = new Date; 
              fjs.src = 'http://localhost:8082/mieruca-optimize?v=' + timestamp.getTime();
              var x = document.getElementsByTagName('script')[0]; 
              x.parentNode.insertBefore(fjs, x);
            })();`}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
