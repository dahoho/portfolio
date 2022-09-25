import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { MainLayout } from "src/component/Layout/MainLayout";
import { Works } from "src/component/Works";
import { client } from "src/lib/client";

type Works = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Works>;

const WorksPage: NextPage = (props) => {
  return (
    <>
      <MainLayout>
        <Works worksdata={props} />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Works>({ endpoint: "portfolio" });

  return {
    props: data,
  };
};

export default WorksPage;
