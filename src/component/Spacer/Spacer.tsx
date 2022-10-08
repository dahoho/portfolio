import styles from "src/component/Spacer/index.module.scss";

type Props = {
  size: any;
};

export const Spacer = ({ size }: Props) => {
  return <div className={styles[size]}></div>;
};
