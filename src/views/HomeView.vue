<template>
  <div class="md:pt-[140px] lg:pt-[160px] pt-[90px]">
    <main>
      <section class="w-[min(1040px,81.25vw)] m-auto mb-gutter-y pb-gutter-y">
        <h1 class="text-header03 md:text-header02 mb-2">
          {{ $tm("home.title") }}
        </h1>
        <p class="text-header06">{{ $tm("home.description") }}</p>
      </section>
      <section class="w-[min(1040px,81.25vw)] m-auto">
        <ul>
          <li
            v-for="(product, index) in caseStudies"
            :key="index"
            class="md:mb-gutter-y mb-gutter-y-2"
          >
            <a
              :href="'/' + product.id"
              class="grid grid-cols-1 md:grid-cols-custom gap-x-gutter-x"
            >
              <div>
                <img :src="product.image" :alt="product.name" />
              </div>
              <div class="text-left py-gutter-y md:py-0 lg:py-gutter-y-0.5">
                <h2 class="text-header05 mb-gutter-y-0.5">
                  {{ product.name }}
                </h2>
                <p class="mb-gutter-y-0.5">{{ product.intro }}</p>
                <ul>
                  <li
                    v-for="(tag, idx) in product.tags"
                    :key="idx"
                    class="bg-BG-tertiary inline-block rounded-full py-1 px-2 mr-2 text-label01"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
// import { useI18n } from "vue-i18n";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default {
  name: "HomeView",
  setup() {
    const { tm } = useI18n();
    const caseStudies = computed(() => {
      return tm("caseStudies");
    });
    return { tm, caseStudies };
  },
};
</script>
