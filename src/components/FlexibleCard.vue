<template>
  <ul
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-y md:gap-gutter-x-0.5"
  >
    <li
      v-for="(card, index) in data"
      :key="index"
      class="bg-BG-secondary p-gutter-x-1.5 md:p-gutter-x-0.5"
    >
      <h4 class="text-header06 text-olive mb-2 text-left">{{ card.header }}</h4>
      <p class="text-left">{{ card.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FlexibleCard",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
