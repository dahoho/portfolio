import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { MemoDetail } from "src/component/MemoDetail";
import { client } from "src/lib/client";

type Memo = {
  title: string;
  body: string;
};

type Props = Memo & MicroCMSContentId & MicroCMSDate;

const MemoDetailPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Memo | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <MemoDetail memodata={props} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "memo" });
  const ids = data.contents.map((content) => `/memo/${content.id}`);
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
  const data = await client.getListDetail<Memo>({
    contentId: ctx.params.id,
    endpoint: "memo",
  });
  return {
    props: data,
  };
};

export default MemoDetailPage;
