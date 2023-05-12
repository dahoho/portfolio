import Image from "next/image";
import Link from "next/link";
import tagImg from "public/common/icon-tag.svg";
import product01Img from "public/works/product01.png";
import styles from "src/components/molecules/Product/index.module.scss";

const TAG = [
  {
    title: "Next.js",
  },
  {
    title: "TypeScript",
  },
  {
    title: "CSS Modules",
  },
  {
    title: "Vercel",
  },
];

export const Product = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/">
          <figure className={styles.picture}>
            <Image src={product01Img} alt="" priority={true} />
          </figure>
          <div className={styles.body}>
            <p>
              本サイトです。
              <br />
              随時更新予定です。
            </p>
            <ul className={styles.tag}>
              {TAG.map((item, index) => {
                return (
                  <li key={index} className={styles.tagItem}>
                    <Image src={tagImg} alt="" width={14} height={14} />
                    <p>{item.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Link>
      </li>
    </ul>
  );
};
