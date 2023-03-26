import Link from "next/link";
import styles from "src/components/molecules/Menu/index.module.scss";

import { useHamburger } from "@/components/hooks/useHamburger";
import { GITHUB_URL, NOTE_URL, TWITTER_URL } from "@/constants";

export const Menu = () => {
  const { navIsOpen, navPassive, toggleNav } = useHamburger();

  return (
    <>
      {navIsOpen === "open" ? (
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
      ) : (
        ""
      )}

      <div
        className={`${styles.hamburger} ${
          navIsOpen === "open" ? styles.hamburgerActive : ""
        }`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
        className={`${styles.nav} ${navIsOpen === "open" ? styles.open : ""}`}
      >
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
            <Link href={GITHUB_URL} target="_blank" onClick={navPassive}>
              Github
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={TWITTER_URL} target="_blank" onClick={navPassive}>
              Twitter
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={NOTE_URL} target="_blank" onClick={navPassive}>
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
        className={`${styles.cover} ${
          navIsOpen === "open" ? styles.coverActive : ""
        }`}
        onClick={navPassive}
      ></div>
    </>
  );
};
