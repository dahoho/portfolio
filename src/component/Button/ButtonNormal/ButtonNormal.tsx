import Link from "next/link";
import type { ReactNode } from "react";
import styles from "src/component/Button/ButtonNormal/index.module.scss";

type ButtonProps = {
  children: ReactNode;
  href: string;
};

export const ButtonNormal = ({ children, href }: ButtonProps) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.button}>{children}</a>
      </Link>
    </>
  );
};
