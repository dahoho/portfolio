import "ress";
import "@/styles/globals.scss";

import type { AppProps } from "next/app";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
