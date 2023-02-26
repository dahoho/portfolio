import { NextSeo } from "next-seo";

import { Works } from "@/components/templates/Works";

const WorksPage = () => {
  return (
    <>
      <NextSeo
        defaultTitle="Works - dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <Works />
    </>
  );
};

export default WorksPage;
