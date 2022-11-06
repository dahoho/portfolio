import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content="#101729" key="themeColor" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  function getInitialColorMode() {
    //ストレージからthemeは取得する。
    const storedPreferenceMode = window.localStorage.getItem("theme");
    const hasStoredPreference = typeof storedPreferenceMode === "string";

    //string型の場合は、現在のthemeの値を返す
    if (hasStoredPreference) {
      return storedPreferenceMode;
    }

    //現在のpreference状態を確認する。
    const preference = window.matchMedia("(prefers-color-scheme): light");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "light" : "dark";
    }

    return "dark";
  }

  const currentColorMode = getInitialColorMode();
  if (currentColorMode === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

export default Document;
