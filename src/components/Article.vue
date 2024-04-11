<script setup lang="ts">
const props = defineProps<{ id: number }>();
const { requestArticle } = articlesApi();
const { requestUser } = usersApi();
const { markAsRead } = useUser();

const author = ref<string>("");
const { data: article, error, pending } = await requestArticle(props.id);

if (article.value) {
  const { data: user } = await requestUser(article.value.userId);
  if (user.value) {
    author.value = user.value.name;
  }

  markAsRead(article.value.id);
}
</script>
<template>
  <div v-if="pending" class="app-loading">Загружаем статью</div>
  <div v-if="error" class="app-error">Не удалось загрузить статью</div>
  <div class="article">
    <h1>{{ article?.title }}</h1>
    <div v-if="author">Author: {{ author }}</div>
    <div>{{ article?.body }}</div>
  </div>
</template>

<style lang="postcss" scoped>
.article {
  margin-top: 12px;
}
</style>
