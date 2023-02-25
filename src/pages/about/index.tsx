import { NextSeo } from "next-seo";

import { About } from "@/components/pages/About";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        defaultTitle="About - dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <About />
    </>
  );
};

export default AboutPage;
