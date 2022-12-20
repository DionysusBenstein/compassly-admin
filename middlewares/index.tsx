import Cookies from "cookies";
import { FetchAPI } from "../fetch";

export const loginMiddleware = async (context: any, callback: () => void) => {
  const toLogin = {
    redirect: {
      permanent: false,
      destination: "/login",
    },
    props: {},
  };
  const cookies = new Cookies(context.req, context.res),
    token = cookies.get("jwt_token");

  if (!token && context.resolvedUrl !== "/login") {
    return toLogin;
  }

  if (token && context.resolvedUrl === "/login") {
    return {
      redirect: {
        permanent: false,
        destination: "/program-library/domains",
      },
      props: {},
    };
  }

  return callback();
};
