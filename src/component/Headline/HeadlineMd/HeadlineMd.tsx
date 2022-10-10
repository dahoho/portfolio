import styles from "src/component/Headline/HeadlineMd/index.module.scss";

type Props = {
  title: string;
};

export const HeadlineMd = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};
