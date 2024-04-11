export const stripDoubleSlash = (str: string) =>
  str.replace(/([^:]\/)\/+/g, "$1");
