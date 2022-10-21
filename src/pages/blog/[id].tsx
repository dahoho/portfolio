import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { BlogDetail } from "src/component/BlogDetail";
import { client } from "src/lib/client";
import { BlogProps } from "src/types";

type Props = BlogProps & MicroCMSContentId & MicroCMSDate;

const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Blog | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <BlogDetail blogdata={props} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
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
  const data = await client.getListDetail<BlogProps>({
    contentId: ctx.params.id,
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default BlogDetailPage;
