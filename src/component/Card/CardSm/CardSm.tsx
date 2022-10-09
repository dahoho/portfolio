import Image from "next/image";
import Link from "next/link";
import logoGithub from "public/img/common/logo-github.svg";
import logoTwitter from "public/img/common/logo-twitter.svg";
import logoZenn from "public/img/common/logo-zenn.svg";

import styles from "./index.module.scss";

export const CardSm = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.about}`}>
          <Link href="about/">
            <a className={styles.link}>
              <p className={styles.itemText}>About</p>
            </a>
          </Link>
        </li>
        <li className={`${styles.item} ${styles.works}`}>
          <Link href="/works">
            <a className={styles.link}>
              <p className={styles.itemText}>Works</p>
            </a>
          </Link>
        </li>
        <li className={`${styles.item} ${styles.activity}`}>
          <Link href="activity/">
            <a className={styles.link}>
              <p className={styles.itemText}>Activity</p>
            </a>
          </Link>
        </li>
        <li className={`${styles.item} ${styles.zenn}`}>
          <a
            className={styles.link}
            href="https://zenn.dev/rh820"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              <Image
                src={logoZenn}
                alt="zenn"
                layout="fill"
                objectFit="contain"
                priority
              />
            </span>
          </a>
        </li>
        <li className={`${styles.item} ${styles.twitter}`}>
          <a
            className={styles.link}
            href="https://twitter.com/@dahoho0820"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              <Image
                src={logoTwitter}
                alt="Twitter"
                objectFit="contain"
                priority
              />
            </span>
          </a>
        </li>
        <li className={`${styles.item} ${styles.github}`}>
          <a
            className={styles.link}
            href="https://github.com/dahoho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              <Image
                src={logoGithub}
                alt="GitHub"
                objectFit="contain"
                priority
              />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};
