import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { About } from "src/component/About";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About | dahoho Portfolio site"
        description="dahohoのポートフォリオサイトです。"
      />
      <About />
    </>
  );
};

export default AboutPage;
