import Image from "next/image";

import { HeadlineLg } from "../Headline/HeadlineLg";
import { Container } from "../Layout/Container";
import { Spacer } from "../Spacer";
import styles from "./index.module.scss";

export const WorksDetail = ({ worksdata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Works" />
        <Spacer size="lg" />
        <section className={styles.section}>
          <h2 className={styles.title}>{worksdata.title}</h2>
          <div className={styles.flex}>
            <div className={styles.block01}>
              <figure>
                <Image
                  src={worksdata.thumbnail.url}
                  width={1280}
                  height={853}
                  layout="responsive"
                  alt=""
                />
              </figure>
              <ul className={styles.tag}>
                {worksdata.category.map((item: any) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
            <div className={styles.block02}>
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: worksdata.body }}
              />
              <dl className={styles.url}>
                <dt>URL:&nbsp;</dt>
                <dd>
                  <a
                    href={worksdata.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {worksdata.url}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
