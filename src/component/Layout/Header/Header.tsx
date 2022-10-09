import Link from "next/link";
import { useRouter } from "next/router";
import { Toggle } from "src/component/Toggle";

import { Menu } from "../Menu";
import styles from "./index.module.scss";

export const Header = () => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.headerIn}>
        <Menu />
        {router.pathname === "/" ? (
          <h1 className={styles.title}>
            <Link href="/">
              <a>dahoho</a>
            </Link>
          </h1>
        ) : (
          <div className={styles.title}>
            <Link href="/">
              <a>dahoho</a>
            </Link>
          </div>
        )}
        <Toggle />
      </div>
    </header>
  );
};
