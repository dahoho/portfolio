import Link from "next/link";

import { Container } from "../Container";
import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link href="/">
                <a className={styles.navLink}>Top</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={styles.navLink}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a className={styles.navLink}>Works</a>
              </Link>
            </li>
            <li>
              <Link href="/timeline">
                <a className={styles.navLink}>Timeline</a>
              </Link>
            </li>
            <li>
              <a
                href="https://zenn.dev/rh820"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zenn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/@RHweb0820"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dahoho"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.copy}>
          <small lang="en" translate="no">
            &copy; 2022 dahoho inc.
          </small>
        </p>
      </Container>
    </footer>
  );
};
