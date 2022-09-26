import { HeadlineLg } from "../Headline/HeadlineLg";
import { Container } from "../Layout/Container";
import { Spacer } from "../Spacer";
import styles from "./index.module.scss";

export const ErrorPage = () => {
  return (
    <>
      <Container>
        <HeadlineLg title="404 not found" />
        <Spacer size="lg" />
        <p className={styles.text}>ページが見つかりません。</p>
      </Container>
    </>
  );
};
