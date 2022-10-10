import { NextSeo } from "next-seo";
import { ErrorPage } from "src/component/ErrorPage";

const CustomErrorPage = () => {
  return (
    <>
      <NextSeo
        title="404 not found | dahoho PORTFOLIO SITE"
        description="dahohoのポートフォリオサイトです。"
      />
      <ErrorPage />
    </>
  );
};

export default CustomErrorPage;
