import "ress";
import "@/styles/globals.scss";

import type { AppProps } from "next/app";

import { DefaultLayout } from "@/components/templates/DefaultLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
