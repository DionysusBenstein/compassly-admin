import styles from "../../styles/components/Footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
      <div className={styles.row}>
        <span className={styles.copiryght}>© 2021 Compassly</span>
      </div>
    </footer>
  );
};
