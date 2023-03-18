import { NextSeo } from "next-seo";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Top } from "@/components/templates/Top";

const Home = (): JSX.Element => {
  return (
    <>
      <NextSeo
        defaultTitle="dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <DefaultLayout>
        <Top />
      </DefaultLayout>
    </>
  );
};

export default Home;
