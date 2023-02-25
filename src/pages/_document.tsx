import { Head, Html, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo
        defaultTitle="dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
