import Link from "next/link";
import styles from "src/component/Breadcrumb/index.module.scss";

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
};

export const Breadcrumb = ({ lists }: Props) => {
  return (
    <ol className={styles.list} aria-label="breadcrumb">
      {lists.map(({ name = "ホーム", path = "/" }, index) => (
        <li className={styles.item} key={index}>
          {lists.length - 1 !== index ? (
            <Link href={path}>
              <a className={styles.next}>{name}</a>
            </Link>
          ) : (
            <span aria-current="page">{name}</span>
          )}
        </li>
      ))}
    </ol>
  );
};
