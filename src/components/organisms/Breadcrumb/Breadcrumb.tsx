import styles from "src/components/organisms/Breadcrumb/index.module.scss";

type BreadcrumbItem = {
  pageTitle: string;
  path?: string;
};

type BreadcrumbProps = {
  lists: BreadcrumbItem[];
};

export const Breadcrumb = ({ lists }: BreadcrumbProps) => {
  return (
    <ol className={styles.breadcrumb}>
      {lists.map(({ pageTitle, path }, index) => (
        <li key={index}>
          {lists.length - 1 !== index ? (
            <>
              <a href={path}>{pageTitle}</a>
            </>
          ) : (
            <span>{pageTitle}</span>
          )}
        </li>
      ))}
    </ol>
  );
};
