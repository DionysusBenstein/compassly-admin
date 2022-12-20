import styles from "../../styles/containers/PageContainer.module.scss";
import { Footer, Header, ImageHead, Menu } from "../../components";

export const PageContainer = ({
  children,
  links,
}: {
  children: any;
  links?: any;
}) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.menuSection}>
        <Menu />
      </div>
      <div className={styles.pageContentSection}>
        <Header />
        <ImageHead links={links} />
        <main className={styles.mainContent}>
          <div className={styles.mainContentData}>{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
