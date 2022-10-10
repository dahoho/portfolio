import Image from "next/image";
import Link from "next/link";
import styles from "src/component/Card/CardWorks/index.module.scss";

export const CardWorks = ({ worksdata }: any) => {
  return (
    <ul className={styles.list}>
      {worksdata.contents.map((item: any) => {
        return (
          <li key={item.id}>
            <Link href={`/works/${item.id}`}>
              <a>
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
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
