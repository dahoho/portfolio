import Image from "next/image";
import profileImg from "public/img/about/profile.jpg";

import { HeadlineLg } from "../Headline/HeadlineLg";
import { HeadlineMd } from "../Headline/HeadlineMd";
import { Container } from "../Layout/Container";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <>
      <Container>
        <HeadlineLg title="About" />
        <div>
          <figure className={styles.picture}>
            <Image src={profileImg} alt="" layout="fill" objectFit="contain" />
          </figure>
          <p className={styles.text}>
            現在Web制作会社3年目のコーダーです。
            普段の業務はコーディングや更新作業、Wordpressをやっております。
            現在はNext.js、TypeScriptなどを勉強中です。
          </p>
          <section className={styles.section}>
            <HeadlineMd title="Skill" />
            <ul className={styles.skill}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Pug</li>
              <li>Wordpress</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>webpack</li>
              <li>gulp</li>
              <li>Git</li>
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
};
