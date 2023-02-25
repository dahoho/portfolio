import styles from "src/components/atoms/Headline/index.module.scss";

import { TitleProps } from "@/types";

export const HeadlineLg = ({ title }: TitleProps) => {
  return (
    <>
      <h2 className={styles.lg}>{title}</h2>
    </>
  );
};
