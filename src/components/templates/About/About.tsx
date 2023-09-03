import { HeadlineLg } from "@/components/atoms/Headline";
import { Container } from "@/components/layouts/Container";
import { Profile } from "@/components/molecules/Profile";
import { Skill } from "@/components/molecules/Skill";
import { Breadcrumb } from "@/components/organisms/Breadcrumb";

export const About = () => {
  return (
    <>
      <Breadcrumb
        lists={[
          {
            pageTitle: "top",
            path: "/",
          },
          {
            pageTitle: "about",
          },
        ]}
      />
      <HeadlineLg title="About" />
      <Container>
        <Profile />
        <Skill />
      </Container>
    </>
  );
};
