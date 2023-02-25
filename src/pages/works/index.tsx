import { NextSeo } from "next-seo";

import { Works } from "@/components/pages/Works";

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
