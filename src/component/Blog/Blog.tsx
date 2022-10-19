import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import styles from "src/component/Blog/index.module.scss";
import { HeadlineLg } from "src/component/Headline/HeadlineLg";
import { Container } from "src/component/Layout/Container";
import { Spacer } from "src/component/Spacer";

type Blog = {
  title: string;
  body: string;
};

export const Blog = ({ blogdata }: any) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    alert("準備中");
    // const q = event.currentTarget.query.value;
    // const data = await fetch("/api/search", {
    //   body: JSON.stringify({ q }),
    //   headers: { "Content-type": "application/json" },
    //   method: "POST",
    // });
    // const json: MicroCMSListResponse<Blog> = await data.json();
    // setSearch(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
  };
  const contents = search ? search.contents : blogdata.contents;
  const totalCount = search ? search.totalCount : blogdata.totalCount;

  return (
    <>
      <Container>
        <HeadlineLg title="Blog" />
        <Spacer size="lg" />
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              placeholder="準備中"
              className={styles.input}
              disabled
            />
            {/* <button type="reset" onClick={handleClick} className={styles.reset}>
              RESET
            </button> */}
          </form>
          <Spacer size="lg" />
          <p>{`${search ? "検索結果" : "記事の総数"}: ${totalCount}`}件</p>
          <Spacer size="sm" />
          <ul>
            {contents.map((item: any) => {
              return (
                <li key={item.id} className={styles.item}>
                  <Link href={`/blog/${item.id}`}>
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
        </div>
      </Container>
    </>
  );
};
