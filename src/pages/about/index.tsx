import { NextSeo } from "next-seo";

import { About } from "@/components/templates/About";

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
