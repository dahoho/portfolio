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

const SKILL = [
  {
    alt: "html5",
    path: logoHtml,
  },
  {
    alt: "css3",
    path: logoCss,
  },
  {
    alt: "sass",
    path: logoSass,
  },
  {
    alt: "tailwindcss",
    path: logoTailwindcss,
  },
  {
    alt: "php",
    path: logoPhp,
  },
  {
    alt: "wordpress",
    path: logoWordpress,
  },
  {
    alt: "jquery",
    path: logoJquery,
  },
  {
    alt: "javascript",
    path: logoJavascript,
  },
  {
    alt: "typescript",
    path: logoTypescript,
  },
  {
    alt: "react",
    path: logoReact,
  },
  {
    alt: "next.js",
    path: logoNext,
  },
  {
    alt: "gulp",
    path: logoGulp,
  },
  {
    alt: "webpack",
    path: logoWebpack,
  },
  {
    alt: "git",
    path: logoGit,
  },
];

export const Skill = () => {
  return (
    <ul className={styles.list}>
      {SKILL.map((skill, index) => {
        return (
          <li key={index} className={styles.item}>
            <Image src={skill.path} alt={skill.alt} priority={true} />
          </li>
        );
      })}
    </ul>
  );
};
