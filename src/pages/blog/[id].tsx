import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { BlogDetail } from "src/component/BlogDetail";
import { client } from "src/lib/client";

type Blog = {
  title: string;
  body: string;
};

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <>
      <NextSeo
        title="Blog | dahoho Portfolio site"
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
  const data = await client.getListDetail<Blog>({
    contentId: ctx.params.id,
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default BlogDetailPage;
