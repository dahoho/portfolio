import styles from "src/components/templates/Works/index.module.scss";

import { HeadlineLg } from "@/components/atoms/Headline";
import { Container } from "@/components/layouts/Container";
import { Product } from "@/components/molecules/Product";
import { Breadcrumb } from "@/components/organisms/Breadcrumb";

export const Works = () => {
  return (
    <>
      <Breadcrumb
        lists={[
          {
            pageTitle: "top",
            path: "/",
          },
          {
            pageTitle: "Works",
          },
        ]}
      />
      <HeadlineLg title="Works" />
      <p className={styles.message}>
        公開できない制作実績が多数ありますので
        <br />
        お問い合わせ下さい。
      </p>
      <Container>
        <Product />
      </Container>
    </>
  );
};
