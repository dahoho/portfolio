import Link from "next/link";
import styles from "src/components/atoms/Github/index.module.scss";

import { GITHUB_URL } from "@/constants";

export const Github = (): JSX.Element => {
  return (
    <div className={styles.github}>
      <Link href={GITHUB_URL} target="_blank">
        <img src="https://grass-graph.appspot.com/images/dahoho.png" alt="" />
      </Link>
    </div>
  );
};
