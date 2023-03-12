import Link from "next/link";
import styles from "src/components/organisms/Header/index.module.scss";

import { Menu } from "@/components/molecules/Menu";

export const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link href="/">dahoho</Link>
        </h1>
        <Menu />
      </header>
    </>
  );
};
