import { CardSm } from "src/component/Card/CardSm";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";
import styles from "src/component/Top/index.module.scss";

export const Top = () => {
  return (
    <>
      <Container>
        <Spacer size="xl" />
        <CardSm />
        <p className={styles.text}>
          お仕事の相談は、
          <br />
          SNSのDMからお問い合わせください。
        </p>
      </Container>
    </>
  );
};
