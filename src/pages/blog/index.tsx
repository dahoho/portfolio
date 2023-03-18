import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Blog } from "@/components/templates/Blog";
import { ZennItem } from "@/types";

type BlogZennProps = {
  articles: ZennItem[];
};

const zennFetcher = async () => {
  const res = await fetch(
    "https://zenn.dev/api/articles?username=rh820&order=latest"
  );
  const result = await res.json();
  return result;
};

const BlogPage = ({ articles }: BlogZennProps): JSX.Element => {
  return (
    <>
      <NextSeo
        defaultTitle="Blog - dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <DefaultLayout>
        <Blog articles={articles} />
      </DefaultLayout>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<BlogZennProps> = async () => {
  const result = await zennFetcher();

  return {
    props: {
      articles: result.articles,
    },
  };
};
