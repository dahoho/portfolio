import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Works } from "src/component/Works";
import { client } from "src/lib/client";
import { WorksProps } from "src/types";

type Props = MicroCMSListResponse<WorksProps>;

const WorksPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Works | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <Works worksdata={props} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<WorksProps>({ endpoint: "production" });

  return {
    props: data,
  };
};

export default WorksPage;
