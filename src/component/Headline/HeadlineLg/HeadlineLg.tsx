import styles from "./index.module.scss";

type Props = {
  title: string;
};

export const HeadlineLg = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};
