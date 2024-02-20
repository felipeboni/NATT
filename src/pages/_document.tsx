import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"


export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" type="image/x-icon" href="/assets/logo.png" />
        <title>nextjs-ts-auth-tailwind-template</title>

        {/* GOOGLE ANALYTICS CODE */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
          <>
            <Script id="google-import" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} strategy="lazyOnload"></Script>
            <Script id="google-analytics" strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}'); `}
            </Script>
          </>
        )}

        {/* END GOOGLE ANALYTICS CODE */}

        {/* FB PIXEL CODE */}
        {process.env.NEXT_PUBLIC_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="lazyOnload">
              {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}');
          fbq('track', 'PageView');
          `}
            </Script>
          </>
        )}
        {/* END FB PIXEL CODE */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
