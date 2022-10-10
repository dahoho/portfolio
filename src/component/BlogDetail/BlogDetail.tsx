import styles from "src/component/BlogDetail/index.module.scss";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { HeadlineMd } from "src/component/Headline/HeadlineMd";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

export const BlogDetail = ({ blogdata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Blog" />
        <Spacer size="lg" />
        <section>
          <HeadlineMd title={blogdata.title} />
          <Spacer size="md" />
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: blogdata.body }}
          />
        </section>
      </Container>
    </>
  );
};
