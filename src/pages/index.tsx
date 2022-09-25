import type { NextPage } from "next";
import { Container } from "src/component/Layout/Container";
import { MainLayout } from "src/component/Layout/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <p>テスト</p>
        </Container>
      </MainLayout>
    </>
  );
};

export default Home;
