import Image from "next/image";
import Link from "next/link";
import logoGithub from "public/common/logo-github.svg";
import logoNote from "public/common/logo-note.svg";
import logoTwitter from "public/common/logo-twitter.svg";
import styles from "src/components/molecules/Card/index.module.scss";

import { GITHUB_URL, NOTE_URL, TWITTER_URL } from "@/constants";

export const Card = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.about}`}>
          <Link href="about/">About</Link>
        </li>
        <li className={`${styles.item} ${styles.blog}`}>
          <Link href="blog/">Tech Blog</Link>
        </li>
        <li className={`${styles.item} ${styles.github}`}>
          <Link href={GITHUB_URL} target="_blank">
            <Image src={logoGithub} alt="" priority={true} />
          </Link>
        </li>
        <li className={`${styles.item} ${styles.twitter}`}>
          <Link href={TWITTER_URL} target="_blank">
            <Image src={logoTwitter} alt="" priority={true} />
          </Link>
        </li>
        <li className={`${styles.item} ${styles.note}`}>
          <Link href={NOTE_URL} target="_blank">
            <Image src={logoNote} alt="" priority={true} />
          </Link>
        </li>
        <li className={`${styles.item} ${styles.work}`}>
          <Link href="works/">works</Link>
        </li>
      </ul>
    </>
  );
};
