import Link from "next/link";
import styles from "src/components/atoms/layout/Header/index.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link href="/">dahoho</Link>
        </h1>
      </header>
    </>
  );
};
