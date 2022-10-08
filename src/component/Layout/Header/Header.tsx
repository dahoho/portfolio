import Link from "next/link";
import { Toggle } from "src/component/Toggle";

import { Menu } from "../Menu";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerIn}>
        <Menu />
        <h1 className={styles.title}>
          <Link href="/">
            <a>dahoho</a>
          </Link>
        </h1>
        <Toggle />
      </div>
    </header>
  );
};
