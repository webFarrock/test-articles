<script setup lang="ts">
const props = withDefaults(defineProps<{ route?: string }>(), {
  route: "",
});

const router = useRouter();

const handleClick = () => {
  if (props.route) {
    router.push(props.route);
  } else {
    router.back();
    window.scrollTo(0, 0);
  }
};
</script>

<template>
  <div class="page-back" @click="handleClick">&lt; Назад</div>
</template>

<style lang="postcss" scoped>
.page-back {
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  background-color: lightgoldenrodyellow;
  padding: 12px;
  display: inline-block;
}
</style>
