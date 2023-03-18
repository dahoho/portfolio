import { NextSeo } from "next-seo";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Works } from "@/components/templates/Works";

const WorksPage = () => {
  return (
    <>
      <NextSeo
        defaultTitle="Works - dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <DefaultLayout>
        <Works />
      </DefaultLayout>
    </>
  );
};

export default WorksPage;
