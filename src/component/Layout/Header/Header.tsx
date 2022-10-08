import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu } from "../Menu";
import styles from "./index.module.scss";

export const Header = () => {
  const [lightTheme, setLightTheme] = useState(undefined);

  const handleToggle = (e: any) => {
    setLightTheme(e.target.checked);
  };

  useEffect(() => {
    if (lightTheme !== undefined) {
      if (lightTheme) {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "dark");
      }
    }
  }, [lightTheme]);

  return (
    <header className={styles.header}>
      <div className={styles.headerIn}>
        <Menu />
        <h1 className={styles.title}>
          <Link href="/">
            <a>dahoho</a>
          </Link>
        </h1>
        <form action="#" className={styles.toggle}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={lightTheme}
            />
            <span className={styles.slider}></span>
          </label>
        </form>
      </div>
    </header>
  );
};
