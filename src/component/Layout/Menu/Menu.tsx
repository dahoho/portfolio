import Link from "next/link";
import { useState } from "react";

import styles from "./index.module.scss";

export const Menu = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const navActive = () => {
    setNavIsOpen(!navIsOpen);
  };

  const navPassive = () => {
    setNavIsOpen(false);
  };

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
      <nav className={`${styles.nav} ${navIsOpen ? styles.navActive : ""}`}>
        <ul>
          <li>
            <Link href="/">
              <a onClick={navPassive} className={styles.navLink}>
                Top
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={navPassive} className={styles.navLink}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a onClick={navPassive} className={styles.navLink}>
                Works
              </a>
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
      <div
        className={`${styles.cover} ${navIsOpen ? styles.coverActive : ""}`}
        onClick={navPassive}
      ></div>
      <button
        type="button"
        className={`${styles.hamburger} ${
          navIsOpen ? styles.hamburgerActive : ""
        }`}
        onClick={navActive}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};
