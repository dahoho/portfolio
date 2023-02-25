import Image from "next/image";
import logoCss from "public/common/logo-css3.svg";
import logoGit from "public/common/logo-git.svg";
import logoGulp from "public/common/logo-gulp.svg";
import logoHtml from "public/common/logo-html5.svg";
import logoJavascript from "public/common/logo-javascript.svg";
import logoJquery from "public/common/logo-jquery.svg";
import logoNext from "public/common/logo-next.svg";
import logoPhp from "public/common/logo-php.svg";
import logoReact from "public/common/logo-react.svg";
import logoSass from "public/common/logo-sass.svg";
import logoTailwindcss from "public/common/logo-tailwindcss.svg";
import logoTypescript from "public/common/logo-typescript.svg";
import logoWebpack from "public/common/logo-webpack.svg";
import logoWordpress from "public/common/logo-wordpress.svg";
import styles from "src/components/molecules/Skill/index.module.scss";

export const Skill = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image src={logoHtml} alt="html5" />
        </li>
        <li className={styles.item}>
          <Image src={logoCss} alt="css3" />
        </li>
        <li className={styles.item}>
          <Image src={logoSass} alt="sass" />
        </li>
        <li className={styles.item}>
          <Image src={logoTailwindcss} alt="tailwindcss" />
        </li>
        <li className={styles.item}>
          <Image src={logoPhp} alt="php" />
        </li>
        <li className={styles.item}>
          <Image src={logoWordpress} alt="wordpress" />
        </li>
        <li className={styles.item}>
          <Image src={logoJquery} alt="jquery" />
        </li>
        <li className={styles.item}>
          <Image src={logoJavascript} alt="javascript" />
        </li>
        <li className={styles.item}>
          <Image src={logoTypescript} alt="typescript" />
        </li>
        <li className={styles.item}>
          <Image src={logoReact} alt="react" />
        </li>
        <li className={styles.item}>
          <Image src={logoNext} alt="next.js" />
        </li>
        <li className={styles.item}>
          <Image src={logoGulp} alt="gulp" />
        </li>
        <li className={styles.item}>
          <Image src={logoWebpack} alt="webpack" />
        </li>
        <li className={styles.item}>
          <Image src={logoGit} alt="git" />
        </li>
      </ul>
    </>
  );
};
