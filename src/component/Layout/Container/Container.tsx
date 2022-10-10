import type { ReactNode } from "react";
import styles from "src/component/Layout/Container/index.module.scss";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
