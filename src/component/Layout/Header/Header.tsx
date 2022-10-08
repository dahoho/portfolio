import Link from "next/link";

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
        <form action="#" className={styles.toggle}>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </form>
      </div>
    </header>
  );
};
