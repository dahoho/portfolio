import Image from "next/image";
import logoZenn from "public/img/timeline/logo-zenn.svg";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

import styles from "./index.module.scss";

interface Feed {
  title: string;
  isoDate: string;
  link: string;
}

interface Props {
  zenndata: Array<Feed>;
}

export const Timeline = ({ zenndata }: Props) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Timeline" />
        <Spacer size="lg" />
        <ul>
          {zenndata.map((item: any) => {
            return (
              <li className={styles.item} key={item.link}>
                <a
                  className={styles.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className={styles.logo}>
                    <Image
                      src={logoZenn}
                      alt="zenn"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </figure>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};
