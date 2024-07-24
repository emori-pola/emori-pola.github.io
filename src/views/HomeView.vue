<template>
  <div>
    <main>
      <section>
        <h1 class="text-header02">タイトル</h1>
      </section>
      <section class="w-[min(1040px,81.25vw)] m-auto">
        <ul>
          <li
            v-for="(product, index) in products"
            :key="index"
            class="mb-gutter-y"
          >
            <a
              :href="product.link"
              class="grid grid-cols-1 md:grid-cols-custom gap-x-gutter-x"
            >
              <div class="">
                <img :src="product.image" :alt="product.title" />
              </div>
              <div class="text-left py-gutter-y-0.5">
                <h2 class="text-header05 mb-gutter-y-0.5">
                  {{ product.title }}
                </h2>
                <p class="mb-gutter-y-0.5">
                  {{ product.description }}
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
import { products } from "@/products-data";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      products,
    };
  },
};
</script>
