import Link from "next/link";
import styles from "src/components/atoms/Github/index.module.scss";

export const Github = () => {
  return (
    <div className={styles.github}>
      <Link href="https://github.com/dahoho" target="_blank">
        <img
          src="https://grass-graph.appspot.com/images/dahoho.png?background=none"
          alt=""
        />
      </Link>
    </div>
  );
};
