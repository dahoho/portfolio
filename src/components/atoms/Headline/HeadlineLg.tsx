import styles from "src/components/atoms/Headline/index.module.scss";

import { TitlePropsType } from "@/types";

export const HeadlineLg = ({ title }: TitlePropsType) => {
  return <h2 className={styles.lg}>{title}</h2>;
};
