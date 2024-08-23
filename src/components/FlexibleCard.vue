<template>
  <ul
    :class="gridClass"
    class="grid grid-cols-1 md:grid-cols-2 gap-gutter-y md:gap-gutter-x-0.5"
  >
    <li
      v-for="(card, index) in data"
      :key="index"
      class="bg-BG-secondary p-gutter-x-1.5 md:p-5"
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
  computed: {
    gridClass() {
      const length = this.data.length;
      let lgClass = "lg:grid-cols-1";

      if (length === 2) {
        lgClass = "lg:grid-cols-2";
      } else if (length === 3) {
        lgClass = "lg:grid-cols-3";
      } else if (length == 4) {
        lgClass = "lg:grid-cols-4";
      } else if (length >= 5) {
        lgClass = "lg:grid-cols-3";
      }

      return {
        [lgClass]: true,
      };
    },
  },
};
</script>
