import Image from "next/image";
import { Breadcrumb } from "src/component/Breadcrumb";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { HeadlineMd } from "src/component/Headline/HeadlineMd";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";
import styles from "src/component/WorksDetail/index.module.scss";

export const WorksDetail = ({ worksdata }: any) => {
  return (
    <>
      <Breadcrumb
        lists={[
          {
            name: "TOP",
            path: "/",
          },
          {
            name: "Works",
            path: "/works/",
          },
          {
            name: `${worksdata.title}`,
          },
        ]}
      />
      <Container>
        <HeadlineLg title="Works" />
        <Spacer size="lg" />
        <section>
          <HeadlineMd title={worksdata.title} />
          <Spacer size="md" />
          <div className={styles.flex}>
            <div>
              <figure className={styles.picture}>
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
              <Spacer size="sm" />
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
