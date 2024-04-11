import type { IArticle } from "~/typing/api/articles";
import type { loadingStatus } from "~/typing/stores/common";

export const useArticles = defineStore("articles", () => {
  const { requestArticles } = articlesApi();

  const status = ref<loadingStatus>("initial");
  const articles = ref<IArticle[]>([]);

  const init = async () => {
    // тут можно обработку "cache" ttl повесить - но лучше это делать глобально
    if (status.value === "success") return;
    status.value = "pending";
    const { data, error } = await requestArticles();

    if (error.value) {
      console.warn("errors while fetching articles", error.value);
      status.value = "error";
      return;
    }

    if (data.value) {
      articles.value = data.value;
      status.value = "success";
    }
  };

  init();

  return {
    articles,
    status,
  };
});
