import { Breadcrumb } from "@/components/atoms/Breadcrumb";
import { Container } from "@/components/atoms/Container";
import { HeadlineLg } from "@/components/atoms/Headline";
import { Product } from "@/components/molecules/Product";

export const Works = (): JSX.Element => {
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
      <Container>
        <Product />
      </Container>
    </>
  );
};
