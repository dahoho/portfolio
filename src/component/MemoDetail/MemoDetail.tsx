import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { HeadlineMd } from "src/component/Headline/HeadlineMd";
import { Container } from "src/component/Layout/Container";
import styles from "src/component/MemoDetail/index.module.scss";
import { Spacer } from "src/component/Spacer";

export const MemoDetail = ({ memodata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Memo" />
        <Spacer size="lg" />
        <section>
          <HeadlineMd title={memodata.title} />
          <Spacer size="md" />
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: memodata.body }}
          />
        </section>
      </Container>
    </>
  );
};
