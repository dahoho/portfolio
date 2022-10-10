import Link from "next/link";
import { useRouter } from "next/router";
import styles from "src/component/Layout/Header/index.module.scss";
import { Menu } from "src/component/Layout/Menu";
import { Toggle } from "src/component/Toggle";

export const Header = () => {
  const router = useRouter();

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
