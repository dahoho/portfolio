import styles from "src/component/Layout/Footer/index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        <small lang="en" translate="no">
          &copy; 2022 dahoho inc.
        </small>
      </p>
    </footer>
  );
};
