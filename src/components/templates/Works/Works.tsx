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
      <Container>
        <Product />
      </Container>
    </>
  );
};
