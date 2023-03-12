import styles from "src/components/layouts/DefaultLayout/index.module.scss";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { ChildrenProps } from "@/types";

export const DefaultLayout = ({ children }: ChildrenProps): JSX.Element => {
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
