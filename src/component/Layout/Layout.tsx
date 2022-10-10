import type { ReactNode } from "react";
import { Footer } from "src/component/Layout/Footer";
import { Header } from "src/component/Layout/Header";
import styles from "src/component/Layout/index.module.scss";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
