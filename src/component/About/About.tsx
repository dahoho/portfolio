import Image from "next/image";
import profileImg from "public/img/about/profile.jpg";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { HeadlineMd } from "src/component/Headline/HeadlineMd";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

import styles from "./about.module.scss";

export const About = () => {
  return (
    <>
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
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Pug</li>
            <li>Wordpress</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>webpack</li>
            <li>gulp</li>
            <li>Git</li>
          </ul>
        </section>
      </Container>
    </>
  );
};
