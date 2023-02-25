import styles from "src/components/atoms/Container/index.module.scss";

import { ChildrenProps } from "@/types";

export const Container = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};
