import dayjs from "dayjs";
import Image from "next/image";
import logoZenn from "public/img/activity/logo-zenn.svg";
import styles from "src/component/Activity/index.module.scss";
import { Breadcrumb } from "src/component/Breadcrumb";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

interface Feed {
  title: string;
  isoDate: string;
  link: string;
}

interface Props {
  zenndata: Array<Feed>;
}

export const Activity = ({ zenndata }: Props) => {
  return (
    <>
      <Breadcrumb
        lists={[
          {
            name: "TOP",
            path: "/",
          },
          {
            name: "Activity",
          },
        ]}
      />
      <Container>
        <HeadlineLg title="Activity" />
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
                  <span className={styles.linkIn}>
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
                  </span>
                  <time className={styles.time}>
                    {dayjs(item.pubDate).format("YYYY.MM.DD")}
                  </time>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};
