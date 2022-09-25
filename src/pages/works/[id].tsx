import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { MainLayout } from "src/component/Layout/MainLayout";
import { WorksDetail } from "src/component/WorksDetail";
import { client } from "src/lib/client";

type Works = {
  title: string;
  body: string;
};

type Props = Works & MicroCMSContentId & MicroCMSDate;

const WorksDetailPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Works | dahoho Portfolio site"
        description="dahohoのポートフォリオサイトです。"
      />
      <MainLayout>
        <WorksDetail worksdata={props} />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
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
  const data = await client.getListDetail<Works>({
    contentId: ctx.params.id,
    endpoint: "portfolio",
  });
  return {
    props: data,
  };
};

export default WorksDetailPage;
