import type { ReactNode } from "react";
import { Footer } from "src/component/Layout/Footer";
import { Header } from "src/component/Layout/Header";
import styles from "src/component/Layout/index.module.scss";
import { Spacer } from "src/component/Spacer";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className={styles.main}>
          {children}
          <Spacer size="xl" />
        </main>
        <Footer />
      </div>
    </>
  );
};
