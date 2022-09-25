import "src/styles/normalize.scss";
import "src/styles/globals.scss";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  // meta関連
  const siteInfo = {
    title: "dahoho Portfolio site",
    description: "dahohoのポートフォリオサイトです。",
  };
  return (
    <>
      <DefaultSeo
        defaultTitle={siteInfo.title}
        description={siteInfo.description}
      />
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
