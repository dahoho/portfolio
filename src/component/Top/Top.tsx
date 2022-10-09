import { CardSm } from "src/component/Card/CardSm";
import { Container } from "src/component/Layout/Container";

import styles from "./index.module.scss";

export const Top = () => {
  return (
    <>
      <Container>
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
