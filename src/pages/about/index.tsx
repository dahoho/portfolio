import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { About } from "src/component/About";
import { MainLayout } from "src/component/Layout/MainLayout";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About | dahoho Portfolio site"
        description="dahohoのポートフォリオサイトです。"
      />
      <MainLayout>
        <About />
      </MainLayout>
    </>
  );
};

export default AboutPage;
