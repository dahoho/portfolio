import { ReactNode } from "react";
import styles from "src/components/templates/DefaultLayout/index.module.scss";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

type Children = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Children) => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};
