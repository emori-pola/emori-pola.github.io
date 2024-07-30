<template>
  <ul class="grid grid-cols-4 gap-gutter-x-0.5">
    <li
      v-for="(card, index) in caseStudy[0].nationalGallery.painPoints"
      :key="index"
      class="bg-BG-secondary p-gutter-x-0.5"
    >
      <h4 class="text-header06 text-olive mb-2 text-left">{{ card.header }}</h4>
      <p class="text-left">{{ card.content }}</p>
    </li>
  </ul>
</template>

<script>
import { caseStudy } from "@/case-study-data";

export default {
  data() {
    return {
      caseStudy: caseStudy,
    };
  },
};
</script>
