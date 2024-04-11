import { stripDoubleSlash } from "~/utils/string";

export default defineEventHandler((event) => {
  const reqUrl = (event.node.req?.url ?? "").replace(/webgate\//g, "");
  const { baseUrl } = useRuntimeConfig();
  const path = stripDoubleSlash([baseUrl, "/", reqUrl].join(""));
  // eslint-disable-next-line no-console
  console.log("[PROXY]", `redirect: /webgate${reqUrl} -> ${path}`);
  return proxyRequest(event, path);
});
