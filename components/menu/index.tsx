import styles from "../../styles/components/Menu.module.scss";
import Link from "next/link";
import { Logotype } from "..";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

export const Menu = () => {
  const router = useRouter();
  
  return (
    <section className={styles.section}>
      <div className={styles.headContent}>
        <Logotype />
      </div>
      <div className={styles.titleMenu}>Pages</div>
      <nav className={styles.listMenu}>
        <ul className={styles.list}>
          <li
            className={`${styles.line} ${
              router.pathname === "/program-library/domains" ||
              router.pathname === "/program-library/subdomains" ||
              router.pathname === "/program-library/target-skills"
                ? styles.active
                : ""
            }`}
          >
            <Link href={"/program-library/domains"}>Program library</Link>
          </li>
          <li
            className={`${styles.line} ${
              router.pathname === "/maladaptive" ? styles.active : ""
            }`}
          >
            <Link href={"/maladaptive"}>Maladaptive behaviour</Link>
          </li>
          <li
            className={`${styles.line} ${
              router.pathname === "/employess" ? styles.active : ""
            }`}
          >
            <Link href={"/employess"}>Employess</Link>
          </li>
          <li
            className={`${styles.line} ${
              router.pathname === "/clients" ? styles.active : ""
            }`}
          >
            <Link href={"/clients"}>Clients</Link>
          </li>
          <li
            className={`${styles.line} ${
              router.pathname === "/reports" ? styles.active : ""
            }`}
          >
            <Link href={"/reports"}>Reports</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
