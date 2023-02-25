import Image from "next/image";
import Link from "next/link";
import logoGithub from "public/common/logo-github.svg";
import logoTwitter from "public/common/logo-twitter.svg";
import styles from "src/components/molecules/Card/index.module.scss";

export const Card = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.about}`}>
          <Link href="about/">About</Link>
        </li>
        <li className={`${styles.item} ${styles.blog}`}>
          <Link href="blog/">Blog</Link>
        </li>
        <li className={`${styles.item} ${styles.github}`}>
          <Link href="https://github.com/dahoho" target="_blank">
            <Image src={logoGithub} alt="" priority={true} />
          </Link>
        </li>
        <li className={`${styles.item} ${styles.twitter}`}>
          <Link href="https://twitter.com/@dahoho0820" target="_blank">
            <Image src={logoTwitter} alt="" priority={true} />
          </Link>
        </li>
        <li className={`${styles.item} ${styles.work}`}>
          <Link href="works/">works</Link>
        </li>
      </ul>
    </>
  );
};
