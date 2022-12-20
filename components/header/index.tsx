import styles from "../../styles/components/Header.module.scss";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { UserAPI } from "../../fetch";
import { generateAvatar } from "../../hooks/generateAvatar";
import getConfig from "next/config";
import { Loader } from "..";

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export const Header = () => {
  const router = useRouter(),
    [loaded, setLoad] = useState<boolean>(false),
    [loadLogout, setLoadLogout] = useState<boolean>(false),
    logout = async () => {
      await setLoadLogout(true);
      await UserAPI("get", `/admin/logout`);

      const timeout = setTimeout(() => {
        Cookies.remove("jwt_token");
        setLoadLogout(false);
        router.push("/login");
        clearTimeout(timeout);
      }, 1000);
    };

  useEffect(() => setLoad(true), []);
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.data}>
          <div className={styles.name}>Admin Admin</div>
          <div className={styles.status}>Administrator</div>
        </div>
        <div className={styles.avatar}>
          {loaded && (
            <button
              className={styles.ava}
              style={{
                backgroundImage: `url(${generateAvatar("Admin", "Admin", 45)})`,
                width: "45px",
                height: "45px",
              }}
            ></button>
          )}
        </div>
        <div className={styles.actionList}>
          <button className={styles.logout} onClick={logout}>
            <Loader enabled={loadLogout} />
            {!loadLogout && <span>Log out</span>}
          </button>
        </div>
      </div>
    </header>
  );
};
