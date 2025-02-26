import Head from "next/head";

const AnalyticsScripts = () => {
  return (
    <Head>
      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function() {
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1536254820374324');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* NoScript Fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1536254820374324&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>
      {/* End Meta Pixel Code */}

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-07N7L1549H"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-07N7L1549H');
          `,
        }}
      />
    </Head>
  );
};

export default AnalyticsScripts;
