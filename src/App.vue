<template>
  <header
    class="w-full flex items-center z-50 fixed justify-between pt-gutter-y px-[min(120px,9.375vw)]"
  >
    <div class="">
      <router-link
        to="/"
        class="transition-opacity duration-300 ease-out hover:opacity-70"
        ><img src="/images/logo.svg" alt=""
      /></router-link>
    </div>
    <div class="flex items-center">
      <nav class="mr-gutter-x">
        <!-- Home Link -->
        <template v-if="!isCurrentPage('/')">
          <router-link
            class="font-sortsMillGoudy text-[1.5rem] mr-4 transition-opacity duration-300 ease-out hover:opacity-30"
            :to="{ name: 'Home' }"
          >
            Home
          </router-link>
        </template>
        <template v-else>
          <span class="font-sortsMillGoudy text-[1.5rem] mr-4"> Home </span>
        </template>

        <!-- About Link -->
        <template v-if="!isCurrentPage('/about')">
          <router-link
            class="font-sortsMillGoudy text-[1.5rem] transition-opacity duration-300 ease-out hover:opacity-30"
            :to="{ name: 'About' }"
          >
            About
          </router-link>
        </template>
        <template v-else>
          <span class="font-sortsMillGoudy text-[1.5rem]"> About </span>
        </template>
      </nav>
      <div :class="currentLangClass">
        <button
          :class="{ 'text-olive font-bold': currentLanguage === 'en' }"
          class="mr-1"
          @click="switchLanguage('en')"
        >
          EN
        </button>
        /
        <button
          :class="{ 'text-olive font-bold': currentLanguage === 'ja' }"
          class="ml-1"
          @click="switchLanguage('ja')"
        >
          JP
        </button>
      </div>
    </div>
  </header>

  <router-view />

  <footer class="pb-4">
    Copyright © 2024 Yuka Yamada. All rights reserved.
  </footer>
</template>

<script>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed, onMounted } from "vue";

export default {
  setup() {
    // 言語切り替えロジック
    const { locale } = useI18n();

    onMounted(() => {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage) {
        locale.value = savedLanguage;
      }
    });

    const currentLangClass = computed(() =>
      locale.value === "en" ? "font-english" : "font-japanese"
    );

    const currentLanguage = computed(() => locale.value);

    const switchLanguage = (lang) => {
      locale.value = lang;
      localStorage.setItem("language", lang);
    };

    // ナビゲーションリンクロジック
    const route = useRoute();

    const isCurrentPage = (path) => {
      return route.path === path;
    };

    return {
      currentLangClass,
      currentLanguage,
      switchLanguage,
      isCurrentPage,
    };
  },
};
</script>

<style>
body {
  background: #f9f5e9;
}
#app {
  font-family: PT Sans, "Noto Sans JP", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5f5a42;
}
.router-link-active {
  color: #e3d8c3;
}
</style>
