import styles from "src/components/organisms/Footer/index.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>
        <small>&copy; 2023 dahoho inc.</small>
      </p>
    </footer>
  );
};
