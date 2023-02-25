import { ReactNode } from "react";
import styles from "src/components/templates/DefaultLayout/index.module.scss";

import { Footer } from "@/components/atoms/layout/Footer";
import { Header } from "@/components/atoms/layout/Header";

type Children = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Children) => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
