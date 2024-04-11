import { urls } from "~/api/config";
import type {
  IArticlesResponse,
  IArticleResponse,
} from "~/typing/api/articles";

export default () => {
  const requestArticle = (id: number) => {
    return useTransport<IArticleResponse, IArticleResponse>(
      `${urls.articles.item}${id}`,
      {
        query: { id },
        onResponseError(ctx) {
          useCreateError(ctx.response._data.message, ctx.response.status);
        },
      },
    );
  };

  const requestArticles = () => {
    return useTransport<IArticlesResponse, IArticlesResponse>(
      urls.articles.list,
      {
        onResponseError(ctx) {
          useCreateError(ctx.response._data.message, ctx.response.status);
        },
      },
    );
  };

  return {
    requestArticle,
    requestArticles,
  };
};
