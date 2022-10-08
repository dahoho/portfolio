import styles from "src/component/Spacer/index.module.scss";

type Props = {
  size: never;
};

export const Spacer = ({ size }: Props) => {
  return <div className={styles[size]}></div>;
};
