import dayjs from "dayjs";
import Image from "next/image";
import logoZenn from "public/common/logo-zenn.svg";
import styles from "src/components/templates/Blog/index.module.scss";

import { HeadlineLg } from "@/components/atoms/Headline";
import { Container } from "@/components/layouts/Container";
import { Breadcrumb } from "@/components/organisms/Breadcrumb";
import { ZennItem } from "@/types";

type BlogZennProps = {
  articles: ZennItem[];
};

export const Blog = ({ articles }: BlogZennProps): JSX.Element => {
  return (
    <>
      <Breadcrumb
        lists={[
          {
            pageTitle: "top",
            path: "/",
          },
          {
            pageTitle: "Tech Blog",
          },
        ]}
      />
      <HeadlineLg title="Tech Blog" />
      <Container>
        <ul className={styles.list}>
          {articles.map((article) => {
            return (
              <li className={styles.item} key={article.id}>
                <a href={`https://zenn.dev/${article.path}`} target="_blank">
                  <p className={styles.title}>{article.title}</p>
                  <div className={styles.itemIn}>
                    <Image
                      src={logoZenn}
                      alt="zenn"
                      style={{ objectFit: "contain" }}
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <time className={styles.time}>
                      {dayjs(article.published_at).format("YYYY.MM.DD")}
                    </time>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};
