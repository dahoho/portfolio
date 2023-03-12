import { NextSeo } from "next-seo";

import { Top } from "@/components/templates/Top";

const Home = (): JSX.Element => {
  return (
    <>
      <NextSeo
        defaultTitle="dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <Top />
    </>
  );
};

export default Home;
