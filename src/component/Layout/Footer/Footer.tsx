import { Container } from "../Container";
import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.copy}>
          <small lang="en" translate="no">
            &copy; 2022 dahoho inc.
          </small>
        </p>
      </Container>
    </footer>
  );
};
