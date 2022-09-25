import type { NextPage } from "next";
import { MainLayout } from "src/component/Layout/MainLayout";
import { Top } from "src/component/Top";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Top />
      </MainLayout>
    </>
  );
};

export default Home;
