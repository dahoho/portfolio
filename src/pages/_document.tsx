import NextDocument, { Head, Html, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
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
  // 最初のpreferenceを確認して、darkかlightの文字列を返す関数
  function getInitialColorMode() {
    //ストレージからthemeは取得する。
    const persistedPreferenceMode = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedPreferenceMode === "string";

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    const preference = window.matchMedia("(prefers-color-scheme: light)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "light" : "dark";
    }

    return "dark";
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;

  element.style.setProperty("--initial-color-mode", currentColorMode);

  if (currentColorMode === "light")
    document.documentElement.setAttribute("data-theme", "light");
}

export default Document;
