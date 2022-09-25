import { CardSm } from "../Card/CardSm";
import { Container } from "../Layout/Container";
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
