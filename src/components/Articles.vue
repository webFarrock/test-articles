<script setup lang="ts">
import { Routes } from "~/utils/routes";

const { isRead } = useUser();
const articlesStore = useArticles();
const { articles, status } = storeToRefs(articlesStore);
</script>

<template>
  <div v-if="status === 'pending'" class="app-loading">Загружаем статьи</div>
  <div v-if="status === 'error'" class="app-error">
    Не удалось загрузить список статей
  </div>
  <div v-if="status === 'success' && articles.length" class="articles">
    <h1>Список статей</h1>
    <div v-for="item in articles" :key="item.id" class="articles__item">
      <NuxtLink :to="`${Routes.Article}/${item.id}`">
        <template v-if="isRead(item.id)"> [прочитано] </template>
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.articles {
  &__item {
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
