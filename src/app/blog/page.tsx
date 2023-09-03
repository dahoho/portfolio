import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Blog } from "@/components/templates/Blog";
import { ZennArticleType } from "@/types";

type BlogZennProps = {
  articles: ZennArticleType[];
};

const zennFetcher = async () => {
  const response = await fetch(
    "https://zenn.dev/api/articles?username=rh820&order=latest",
  );
  const result = await response.json();
  return result;
};

const BlogPage = async () => {
  const zennData: BlogZennProps = await zennFetcher();
  return (
    <DefaultLayout lower>
      <Blog articles={zennData.articles} />
    </DefaultLayout>
  );
};

export default BlogPage;
