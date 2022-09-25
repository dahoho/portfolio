import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Parser from "rss-parser";
import { MainLayout } from "src/component/Layout/MainLayout";
import { Timeline } from "src/component/Timeline";

const TimelinePage: NextPage = ({ zennPosts }: any) => {
  return (
    <>
      <NextSeo
        title="Timeline | dahoho Portfolio site"
        description="dahohoのポートフォリオサイトです。"
      />
      <MainLayout>
        <Timeline zenndata={zennPosts} />
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

export default TimelinePage;
