import { HeadlineLg } from "../Headline/HeadlineLg";
import { HeadlineMd } from "../Headline/HeadlineMd";
import { Container } from "../Layout/Container";
import { Spacer } from "../Spacer";
import styles from "./index.module.scss";

export const BlogDetail = ({ blogdata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Blog" />
        <Spacer size="lg" />
        <section>
          <HeadlineMd title={blogdata.title} />
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: blogdata.body }}
          />
        </section>
      </Container>
    </>
  );
};
