import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Blog } from "src/component/Blog";
import { client } from "src/lib/client";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const BlogPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Blog | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <Blog blogdata={props} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });

  return {
    props: data,
  };
};

export default BlogPage;
