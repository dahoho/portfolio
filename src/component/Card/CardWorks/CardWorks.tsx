import Image from "next/image";
import worksImg from "public/img/works/dummy.jpg";

import styles from "./index.module.scss";

export const CardWorks = () => {
  return (
    <ul className={styles.list}>
      <li>
        <figure className={styles.picture}>
          <Image src={worksImg} alt="" layout="responsive" placeholder="blur" />
        </figure>
        <div className={styles.block}>
          <p className={styles.title}>タイトルが入ります。</p>
          <ul className={styles.tag}>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
          </ul>
        </div>
      </li>
      <li>
        <figure className={styles.picture}>
          <Image src={worksImg} alt="" layout="responsive" placeholder="blur" />
        </figure>
        <div className={styles.block}>
          <p className={styles.title}>タイトルが入ります。</p>
          <ul className={styles.tag}>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};
