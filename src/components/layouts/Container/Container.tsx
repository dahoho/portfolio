import styles from "src/components/layouts/Container/index.module.scss";

import { ChildrenProps } from "@/types";

export const Container = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};
