import Image from "next/image";

import { HeadlineLg } from "../Headline/HeadlineLg";
import { HeadlineMd } from "../Headline/HeadlineMd";
import { Container } from "../Layout/Container";
import { Spacer } from "../Spacer";
import styles from "./index.module.scss";

export const WorksDetail = ({ worksdata }: any) => {
  return (
    <>
      <Container>
        <HeadlineLg title="Works" />
        <Spacer size="lg" />
        <section>
          <HeadlineMd title={worksdata.title} />
          <div className={styles.flex}>
            <div>
              <figure>
                <Image
                  src={worksdata.thumbnail.url}
                  width={1280}
                  height={853}
                  layout="responsive"
                  objectFit={"cover"}
                  alt=""
                />
              </figure>
            </div>
            <div>
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
              <h3 className={styles.title}>技術構成</h3>
              <ul className={styles.tag}>
                {worksdata.category.map((item: any) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
