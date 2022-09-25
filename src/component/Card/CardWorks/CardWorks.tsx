import Image from "next/image";

import styles from "./index.module.scss";

export const CardWorks = ({ worksdata }: any) => {
  return (
    <ul className={styles.list}>
      {worksdata.contents.map((item: any) => {
        return (
          <li key={item.id}>
            <figure className={styles.picture}>
              <Image
                src={item.thumbnail.url}
                alt=""
                layout="responsive"
                width={300}
                height={200}
                objectFit={"cover"}
              />
            </figure>
            <div className={styles.block}>
              <p className={styles.title}>{item.title}</p>
              <ul className={styles.tag}>
                {item.category.map((item: any) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
