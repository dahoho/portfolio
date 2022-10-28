import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { About } from "src/component/About";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About | dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITEのAboutページです。"
      />
      <About />
    </>
  );
};

export default AboutPage;
