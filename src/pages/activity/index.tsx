import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Parser from "rss-parser";
import { Activity } from "src/component/Activity";
import { MainLayout } from "src/component/Layout/MainLayout";

const ActivityPage: NextPage = ({ zennPosts }: any) => {
  return (
    <>
      <NextSeo
        title="Activity | dahoho Portfolio site"
        description="dahohoのポートフォリオサイトです。"
      />
      <MainLayout>
        <Activity zenndata={zennPosts} />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();

  const feedZenn = await parser.parseURL("https://zenn.dev/rh820/feed");

  return {
    props: {
      zennPosts: feedZenn.items,
    },
  };
};

export default ActivityPage;
