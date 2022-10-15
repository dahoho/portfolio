import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Memo } from "src/component/Memo";
import { client } from "src/lib/client";

type Memo = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Memo>;

const MemoPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Memo | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <Memo memodata={props} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Memo>({ endpoint: "memo" });

  return {
    props: data,
  };
};

export default MemoPage;
