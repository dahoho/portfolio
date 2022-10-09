import styles from "./index.module.scss";

type Props = {
  title: string;
};

export const HeadlineLg = ({ title }: Props) => {
  return <h1 className={styles.title}>{title}</h1>;
};
