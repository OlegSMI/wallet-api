import { computed } from "vue";

export const numConvert = computed(
  () => (num) => Number.parseFloat(num).toFixed(5)
);

export const dateConvert = computed(() => (date) => new Date(date));
