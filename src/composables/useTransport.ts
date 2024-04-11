import { useFetch, type UseFetchOptions } from "nuxt/app";

export const useTransport = <R = void, D = R>(
  url: string,
  params?: UseFetchOptions<R, D>,
) => {
  const { method, ...restParams } = params || {};
  return useFetch(url, {
    baseURL: "/webgate",
    method,
    body: params?.body,
    query: params?.query,
    ...restParams,
  });
};
