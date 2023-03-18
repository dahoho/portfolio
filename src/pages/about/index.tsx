import { NextSeo } from "next-seo";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { About } from "@/components/templates/About";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <NextSeo
        defaultTitle="About - dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <DefaultLayout>
        <About />
      </DefaultLayout>
    </>
  );
};

export default AboutPage;
