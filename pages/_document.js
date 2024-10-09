import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <!-- Mieruca Optimize Tag -->
<script type="text/javascript" id="mierucaOptimizejs">
window.__optimizeid = window.__optimizeid || [];__optimizeid.push([1163282239]);
(function () {var fjs = document.createElement('script');fjs.type = 'text/javascript';
fjs.async = true;fjs.id = "fjssync";var timestamp = new Date;fjs.src = 'https://dev.opt.mieru-ca.com/service/js/mieruca-optimize-dev.js?v=' + timestamp.getTime();
var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(fjs, x);})();
</script>
<!-- End Mieruca Optimize Tag -->
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
