import { Container } from "@/components/atoms/Container";
import { Github } from "@/components/atoms/Github";
import { HeadlineLg } from "@/components/atoms/Headline";
import { Profile } from "@/components/molecules/Profile";
import { Skill } from "@/components/molecules/Skill";

export const About = () => {
  return (
    <>
      <HeadlineLg title="About" />
      <Container>
        <Profile />
        <Skill />
        <Github />
      </Container>
    </>
  );
};
