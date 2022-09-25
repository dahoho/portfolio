import Link from "next/link";

import { Container } from "../Container";
import { Menu } from "../Menu";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerIn}>
          <Menu />
          <h1>
            <Link href="/">
              <a>dahoho</a>
            </Link>
          </h1>
        </div>
      </Container>
    </header>
  );
};
