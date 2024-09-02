<template>
  <section class="py-20 px-[min(60px,4.6875vw)]">
    <h2 class="text-header01 mb-5 text-left">More Works</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-gutter-x">
      <li
        class="mb-8 md:mb-0"
        v-for="(product, index) in filteredProducts"
        :key="index"
      >
        <router-link
          class="transition-opacity duration-300 ease-out hover:opacity-70"
          :to="{ name: 'CaseStudy', params: { id: product.id } }"
        >
          <img class="mb-4" :src="product.image" :alt="product.name" />
          <p class="text-left">{{ product.year }}</p>
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
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default {
  props: {
    excludeLink: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { tm } = useI18n();

    const filteredProducts = computed(() => {
      const caseStudies = tm("caseStudies");
      return caseStudies.filter((product) => product.id !== props.excludeLink);
    });

    return {
      filteredProducts,
    };
  },
};
</script>
