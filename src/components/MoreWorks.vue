<template>
  <section class="py-gutter-y-2 px-[min(60px,4.6875vw)]">
    <h2 class="text-header01 mb-gutter-y-0.5 text-left">More Works</h2>
    <ul class="grid grid-cols-3 gap-gutter-x">
      <li v-for="(product, index) in filteredProducts" :key="index">
        <a :href="'/' + product.id">
          <img class="mb-4" :src="product.image" :alt="product.name" />
          <h4 class="text-left text-header05 mb-2">{{ product.name }}</h4>
          <ul class="text-left">
            <li
              v-for="(tag, idx) in product.tags"
              :key="idx"
              class="bg-BG-tertiary inline-block rounded-full py-1 px-2 mr-2 text-label01"
            >
              {{ tag }}
            </li>
          </ul>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { caseStudyData } from "@/case-study-data";

export default {
  props: {
    excludeLink: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredProducts() {
      console.log("Case Study Data:", caseStudyData); // デバッグ用
      console.log("Exclude Link:", this.excludeLink); // デバッグ用
      return caseStudyData.filter((product) => product.id !== this.excludeLink);
    },
  },
};
</script>
