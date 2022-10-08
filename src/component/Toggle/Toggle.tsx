import { useEffect, useState } from "react";

import styles from "./index.module.scss";

export const Toggle = () => {
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
    <>
      <form action="#" className={styles.toggle}>
        <label className={styles.switching}>
          <input type="checkbox" onChange={handleToggle} checked={lightTheme} />
          <span className={styles.slider}></span>
        </label>
      </form>
    </>
  );
};
