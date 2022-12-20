import styles from "../../styles/components/PageTitle.module.scss";

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
    </div>
  );
};
