import styles from "src/components/layouts/DefaultLayout/index.module.scss";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { ChildrenPropsType } from "@/types";

export const DefaultLayout = ({ children, lower }: ChildrenPropsType) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.main} ${lower ? styles.mainLower : ""}`}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
