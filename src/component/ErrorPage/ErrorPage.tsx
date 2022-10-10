import { ButtonNormal } from "src/component/Button/ButtonNormal";
import styles from "src/component/ErrorPage/index.module.scss";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

export const ErrorPage = () => {
  return (
    <>
      <Container>
        <HeadlineLg title="404 not found" />
        <Spacer size="lg" />
        <p className={styles.text}>ページが見つかりません。</p>
        <Spacer size="lg" />
        <ButtonNormal href={"/"}>TOP</ButtonNormal>
      </Container>
    </>
  );
};
