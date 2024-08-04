<template>
  <header
    class="w-full flex items-center z-50 fixed justify-between pt-gutter-y px-[min(120px,9.375vw)]"
  >
    <div class="">
      <router-link to="/"><img src="/images/logo.svg" alt="" /></router-link>
    </div>
    <div class="flex items-center">
      <nav class="mr-gutter-x">
        <router-link class="font-sortsMillGoudy text-[1.5rem] mr-4" to="/"
          >Home</router-link
        >
        <router-link class="font-sortsMillGoudy text-[1.5rem]" to="/about"
          >About</router-link
        >
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
import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default {
  setup() {
    const { locale } = useI18n();
    const currentLangClass = computed(() =>
      locale.value === "en" ? "font-english" : "font-japanese"
    );
    const currentLanguage = computed(() => locale.value);

    const switchLanguage = (lang) => {
      locale.value = lang;
    };

    return {
      currentLangClass,
      currentLanguage,
      switchLanguage,
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
</style>
