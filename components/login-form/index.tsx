"use strict";
import styles from "../../styles/components/LoginForm.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";
import { LoginAPI } from "../../fetch";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import { Loader, Successfull } from "..";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export const LoginForm = () => {
  const router = useRouter(),
    [load, setLoad] = useState<boolean>(false),
    [successfull, setSuccessfull] = useState<boolean>(false),
    submitForm = async (event: any) => {
      event.preventDefault();
      await setLoad(true);
      const formData = new FormData(event.target as HTMLFormElement),
        { status, data } = await LoginAPI(
          "post",
          `${API_URL}/admin/login`,
          formData
        );

      if (status === 200) {
        await setLoad(false);
        await setSuccessfull(true);

        Cookies.set("jwt_token", data.token, {
          expires: 30,
          path: "*",
        });

        const timeout = setTimeout(() => {
          router.push("/program-library/domains");
          clearTimeout(timeout);
        }, 2000);

        return false;
      }
      await setLoad(false);
      toast.error(data.msg);
    };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={submitForm} className={styles.form}>
        <Loader enabled={load} />
        <Successfull enabled={successfull} />

        <h1 className={styles.formTitle}>Compassly Admin</h1>
        <div className={styles.formLine}>
          <label>Email</label>
          <input type="email" name="email" className={styles.input} />
        </div>
        <div className={styles.formLine}>
          <label>Password</label>
          <input type="password" name="password" className={styles.input} />
        </div>
        <div
          className={`${styles.formLine} ${styles.flex} ${styles.spaceBetven}`}
        >
          <div className={styles.remember}>
            <input type="checkbox" id="remember" className={styles.checkBox} />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className={styles.forgotBtn}>
            <Link href={"/forgot"}>Forgot Password</Link>
          </div>
        </div>
        <div className={styles.formLine}>
          <button type="submit" className={styles.submitButton}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};
