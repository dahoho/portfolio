import "src/styles/normalize.scss";
import "src/styles/globals.scss";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { Layout } from "src/component/Layout";
import * as gtag from "src/lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  // meta関連
  const siteInfo = {
    title: "dahoho Portfolio site",
    description: "dahohoのポートフォリオサイトです。",
  };

  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <DefaultSeo
        defaultTitle={siteInfo.title}
        description={siteInfo.description}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
