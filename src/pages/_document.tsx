import SEO from '@/components/common/SEO';
import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <Link rel="icon" href="./favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script
                    id="heap-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
      window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
      heap.load("1613731307");
      `,
                    }}
                />
            </body>
        </Html>
    );
}
