import styles from "src/components/layouts/Container/index.module.scss";

import { ChildrenPropsType } from "@/types";

export const Container = ({ children }: ChildrenPropsType) => {
  return <div className={styles.container}>{children}</div>;
};
