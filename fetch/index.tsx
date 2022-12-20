import axios, { AxiosRequestConfig, Method } from "axios";
import CookiesCTX from "cookies";
import CookiesFR from "js-cookie";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export const FetchAPI = async (
  type: Method,
  url: string,
  context: any | null,
  formData?: any
) => {
  const cookies = new CookiesCTX(context.req, context.res),
    jwt = cookies?.get("jwt_token"),
    headers = { Authorization: `Bearer ${jwt}` };
  try {
    const fetchObj: AxiosRequestConfig = {
        method: type,
        url: url,
        baseURL: API_URL,
        data: formData,
        headers: headers,
      },
      { data } = await axios(fetchObj);

    return { props: data };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: `/500`,
      },
      props: {},
    };
  }
};

export const LoginAPI = async (type: Method, url: string, formData: any) => {
  const fetchObj: AxiosRequestConfig = {
    method: type,
    url: url,
    baseURL: API_URL,
    data: formData,
  };

  return await axios(fetchObj);
};

export const InitialAPI = async (
  type: Method,
  url: string,
  formData: any,
  ctx: any
) => {
  const cookies = new CookiesCTX(ctx.req, ctx.res),
    jwt = cookies?.get("jwt_token"),
    headers = { Authorization: `Bearer ${jwt}` };

  const fetchObj: AxiosRequestConfig = {
      method: type,
      url: url,
      baseURL: API_URL,
      data: formData,
      headers: headers,
    },
    { data } = await axios(fetchObj);

  return { props: data };
};

export const UserAPI = async (type: Method, url: string, formData?: any) => {
  const headers = { Authorization: `Bearer ${CookiesFR.get("jwt_token")}` },
    fetchObj: AxiosRequestConfig = {
      method: type,
      url: url,
      baseURL: API_URL,
      headers: headers,
      data: formData,
    };

  return await axios(fetchObj);
};
