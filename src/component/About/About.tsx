import Image from "next/image";
import profileImg from "public/img/about/profile.jpg";
import styles from "src/component/About/about.module.scss";
import { Breadcrumb } from "src/component/Breadcrumb";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { HeadlineMd } from "src/component/Headline/HeadlineMd";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

const ITEMS = [
  {
    skill: "HTML",
  },
  {
    skill: "CSS",
  },
  {
    skill: "SCSS",
  },
  {
    skill: "Pug",
  },
  {
    skill: "Wordpress",
  },
  {
    skill: "Javascript",
  },
  {
    skill: "jQuery",
  },
  {
    skill: "webpack",
  },
  {
    skill: "gulp",
  },
  {
    skill: "Git",
  },
];

export const About = () => {
  return (
    <>
      <Breadcrumb
        lists={[
          {
            name: "TOP",
            path: "/",
          },
          {
            name: "About",
          },
        ]}
      />
      <Container>
        <HeadlineLg title="About" />
        <Spacer size="lg" />
        <figure className={styles.picture}>
          <Image src={profileImg} alt="" layout="responsive" priority />
        </figure>
        <p className={styles.text}>
          Ibaraki→Tokyo　28歳
          <br />
          未経験→web制作会社3年目
          <br />
          普段はWEBサイトのコーディングや更新作業、Wordpress構築。
          <br />
          フロントエンドエンジニアを目指して、React、Next.js、TypeScript勉強中です。
          <br />
          趣味はランニングです🏃
        </p>
        <section className={styles.section}>
          <HeadlineMd title="Skill" />
          <ul className={styles.skill}>
            {ITEMS.map((item) => {
              return <li key={item.skill}>{item.skill}</li>;
            })}
          </ul>
        </section>
      </Container>
    </>
  );
};
