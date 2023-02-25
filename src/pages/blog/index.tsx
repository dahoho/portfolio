import { NextSeo } from "next-seo";

import { Blog } from "@/components/pages/Blog";
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

const BlogPage = ({ articles }: BlogZennProps) => {
  return (
    <>
      <NextSeo
        defaultTitle="Blog - dahoho PORTFOLIO SITE"
        description="dahoho PORTFOLIO SITE"
      />
      <Blog articles={articles} />
    </>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const result = await zennFetcher();

  return {
    props: {
      articles: result.articles,
    },
  };
};
