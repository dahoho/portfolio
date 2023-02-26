import Link from "next/link";
import styles from "src/components/molecules/Menu/index.module.scss";

import { useHamburger } from "@/hooks/Hamburger";

export const Menu = () => {
  const { navIsOpen, navPassive, toggleNav } = useHamburger();

  return (
    <>
      {navIsOpen && (
        <style jsx global>
          {`
            @media (max-width: 767px) {
              body {
                overflow: hidden;
                position: fixed;
                width: 100%;
              }
            }
          `}
        </style>
      )}
      <div
        className={`${styles.hamburger} ${
          navIsOpen ? styles.hamburgerActive : ""
        }`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${styles.nav} ${navIsOpen ? styles.open : ""}`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/" onClick={navPassive}>
              Top
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="about/" onClick={navPassive}>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="blog/" onClick={navPassive}>
              Tech Blog
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="https://github.com/dahoho"
              target="_blank"
              onClick={navPassive}
            >
              Github
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="https://twitter.com/@dahoho0820"
              target="_blank"
              onClick={navPassive}
            >
              Twitter
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="https://note.com/dahoho/"
              target="_blank"
              onClick={navPassive}
            >
              note
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="works/" onClick={navPassive}>
              Works
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.cover} ${navIsOpen ? styles.coverActive : ""}`}
        onClick={navPassive}
      ></div>
    </>
  );
};
