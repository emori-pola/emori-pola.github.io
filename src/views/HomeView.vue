<template>
  <div class="">
    <main>
      <section
        class="max-w-[1280px] mx-auto mb-gutter-y-2 pb-5 sm:pb-0 relative h-[min(640px,75vw)] sm:h-[min(640px,65vw)] md:h-[min(640px,56.25vw)]"
      >
        <div
          class="m-auto absolute translate-y-[-50%] top-[55%] sm:top-[55%] md:top-[55%] left-[min(120px,9.375vw)] md:left-[min(200px,16vw)] text-left w-[max(26.5625vw,140px)]"
        >
          <h1
            class="text-[6.15384vw] font-sortsMillGoudy leading-[6.511627vw] md:text-header03 lg:text-header01 mb-1 whitespace-pre-wrap"
          >
            {{ $tm("home.title") }}
          </h1>
          <p class="text-[max(1.5625vw,12px)] whitespace-pre-wrap">
            {{ $tm("home.description") }}
          </p>
        </div>
        <div class="flex justify-center items-end h-full">
          <img class="max-h-[640px] inline-block" src="/images/kv.gif" alt="" />
        </div>
      </section>
      <section class="w-[min(1040px,81.25vw)] m-auto mb-20">
        <ul>
          <li
            v-for="(product, index) in caseStudies"
            :key="index"
            class="md:mb-gutter-y mb-gutter-y-2"
          >
            <a
              :href="'/' + product.id"
              class="grid grid-cols-1 md:grid-cols-custom gap-x-gutter-x transition-opacity duration-300 ease-out hover:opacity-70"
            >
              <div>
                <img :src="product.image" :alt="product.name" />
              </div>
              <div class="text-left py-gutter-y md:py-0 lg:py-gutter-y-0.5">
                <p class="text-[14px] mb-2">{{ product.year }}</p>
                <h2 class="text-header05 mb-4">
                  {{ product.name }}
                </h2>

                <p class="mb-gutter-y-0.5 whitespace-pre-wrap">
                  {{ product.intro }}
                </p>
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
