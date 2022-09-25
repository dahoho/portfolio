import type { ReactNode } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
