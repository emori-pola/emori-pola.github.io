<template>
  <section class="py-gutter-y-2">
    <h2 class="text-header01 mb-gutter-y">More Works</h2>
    <ul class="grid grid-cols-3 gap-gutter-x">
      <li v-for="(product, index) in filteredProducts" :key="index">
        <a :href="product.link">
          <img :src="product.image" :alt="product.title" />
          <h4>{{ product.title }}</h4>
          <ul>
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
import { products } from "@/products-data";

export default {
  props: {
    excludeLink: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredProducts() {
      return products.filter((product) => product.link !== this.excludeLink);
    },
  },
};
</script>
