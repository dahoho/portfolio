import { GetStaticProps, NextPage } from "next";
import Parser from "rss-parser";
import { MainLayout } from "src/component/Layout/MainLayout";
import { Timeline } from "src/component/Timeline";

const TimelinePage: NextPage = ({ zennPosts }: any) => {
  return (
    <>
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
