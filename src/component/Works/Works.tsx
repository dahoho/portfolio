// import { CardWorks } from "../Card/CardWorks";
import { HeadlineLg } from "../Headline/HeadlineLg";
import { HeadlineMd } from "../Headline/HeadlineMd";
import { Container } from "../Layout/Container";
import { Spacer } from "../Spacer";
import styles from "./index.module.scss";

export const Works = ({ worksdata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Works" />
        <Spacer size="lg" />
        <section className={styles.section}>
          <HeadlineMd title="Client Work" />
          <p className={styles.text}>
            仕事では様々なサイトの制作に携わっています。
            <br />
            ご連絡いただければ、詳細をお送りいたします。
          </p>
        </section>
        <section className={styles.section}>
          <HeadlineMd title="Personal Production" />
          {/* <p className={styles.text}>個人で作成したものを掲載しております。</p> */}
          <p className={styles.text}>comming soon</p>
        </section>
        {/* <CardWorks worksdata={worksdata} /> */}
      </Container>
    </>
  );
};
