import dayjs from "dayjs";
import Link from "next/link";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { Container } from "src/component/Layout/Container";
import styles from "src/component/Memo/index.module.scss";
import { Spacer } from "src/component/Spacer";

export const Memo = ({ memodata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Memo" />
        <Spacer size="lg" />
        <section>
          <ul>
            {memodata.contents.map((item: any) => {
              return (
                <li key={item.id} className={styles.item}>
                  <Link href={`/memo/${item.id}`}>
                    <a className={styles.link}>
                      <h3 className={styles.title}>{item.title}</h3>
                      <time className={styles.time}>
                        {dayjs(item.publishedAt).format("YYYY.MM.DD")}
                      </time>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <p className={styles.text}>comming soon</p> */}
        </section>
      </Container>
    </>
  );
};
