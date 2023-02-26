import { Container } from "@/components/atoms/Container";
import { HeadlineLg } from "@/components/atoms/Headline";
import { Product } from "@/components/molecules/Product";

export const Works = () => {
  return (
    <>
      <HeadlineLg title="Works" />
      <Container>
        <Product />
      </Container>
    </>
  );
};
