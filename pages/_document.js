import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <Script id='mierucaOptimizejs' strategy='beforeInteractive'>
             window.__optimizeid = window.__optimizeid || [];
             __optimizeid.push([1864963081]);
        (function() {
	var fjs = document.createElement('script');
	fjs.type = 'text/javascript';
	fjs.async = true;
	fjs.id = "fjssync";
	var timestamp = new Date;
	fjs.src = 'https://dev.opt.mieru-ca.com/service/js/mieruca-optimize-dev.js?v=' + timestamp.getTime();
	var x = document.getElementsByTagName('script')[0];
	x.parentNode.insertBefore(fjs, x);
        })();
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
