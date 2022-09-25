import type { NextPage } from "next";
import { MainLayout } from "src/component/Layout/MainLayout";
import { Works } from "src/component/Works";

const AboutPage: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Works />
      </MainLayout>
    </>
  );
};

export default AboutPage;
