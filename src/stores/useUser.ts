export const useUser = defineStore("user", () => {
  const readList = ref<number[]>([]);

  const isRead = (id: number) => readList.value.includes(id);
  const markAsRead = (id: number) => !isRead(id) && readList.value.push(id);

  return {
    isRead,
    markAsRead,
  };
});
