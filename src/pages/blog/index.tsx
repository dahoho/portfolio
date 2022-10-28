import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Blog } from "src/component/Blog";
import { client } from "src/lib/client";
import { BlogProps } from "src/types";

type Props = MicroCMSListResponse<BlogProps>;

const BlogPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Blog | dahoho PORTFOLIO SITE"
        description="ahoho PORTFOLIO SITEのBlogページです。"
      />
      <Blog blogdata={props} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<BlogProps>({
    endpoint: "blog",
  });

  return {
    props: data,
  };
};

export default BlogPage;
