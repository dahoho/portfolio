import styles from "./index.module.scss";

type Props = {
  title: string;
};

export const HeadlineMd = ({ title }: Props) => {
  return <h2 className={`${"font-en text-xl"} ${styles.title}`}>{title}</h2>;
};
