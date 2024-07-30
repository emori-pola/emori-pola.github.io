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
      <div :class="currentLangClass" class="">
        <button class="mr-2" @click="switchLanguage('en')">EN</button>/
        <button class="ml-2" @click="switchLanguage('ja')">JP</button>
        <!-- <p>{{ $t("message.hello") }}</p> -->
      </div>
    </div>
  </header>

  <router-view />

  <footer class="pb-4">
    Copyright © 2024 Yuka Yamada. All rights reserved.
  </footer>
</template>

<script>
export default {
  computed: {
    currentLangClass() {
      return this.$i18n.locale === "en" ? "font-english" : "font-japanese";
    },
  },
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
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
