import type { NextPage } from "next";
import { About } from "src/component/About";
import { MainLayout } from "src/component/Layout/MainLayout";

const AboutPage: NextPage = () => {
  return (
    <>
      <MainLayout>
        <About />
      </MainLayout>
    </>
  );
};

export default AboutPage;
