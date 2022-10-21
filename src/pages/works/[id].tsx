import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { WorksDetail } from "src/component/WorksDetail";
import { client } from "src/lib/client";
import { WorksProps } from "src/types";

type Props = WorksProps & MicroCMSContentId & MicroCMSDate;

const WorksDetailPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Works | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <WorksDetail worksdata={props} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "production" });
  const ids = data.contents.map((content) => `/works/${content.id}`);
  return {
    fallback: false,
    paths: ids,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }
  const data = await client.getListDetail<WorksProps>({
    contentId: ctx.params.id,
    endpoint: "production",
  });
  return {
    props: data,
  };
};

export default WorksDetailPage;
