import { NextSeo } from "next-seo";
import { ErrorPage } from "src/component/ErrorPage";
import { MainLayout } from "src/component/Layout/MainLayout";

const CustomErrorPage = () => {
  return (
    <>
      <NextSeo
        title="404 not found | dahoho Portfolio site"
        description="dahohoのポートフォリオサイトです。"
      />
      <MainLayout>
        <ErrorPage />
      </MainLayout>
    </>
  );
};

export default CustomErrorPage;
