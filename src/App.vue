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

    <button @click="toggleMenu" class="block w-[25px] md:hidden relative z-50">
      <span
        :class="[
          ' w-[25px] h-[3px] bg-Label-primary transition-transform duration-300',
          menuOpen
            ? 'rotate-[45deg] absolute origin-center my-0 left-0 top-0'
            : 'block my-[5px]',
        ]"
      ></span>
      <span
        :class="[
          ' w-[25px] h-[3px] bg-Label-primary transition-opacity duration-300',
          menuOpen ? 'opacity-0' : 'block my-[5px]',
        ]"
      ></span>
      <span
        :class="[
          ' w-[25px] h-[3px] bg-Label-primary transition-transform duration-300',
          menuOpen
            ? 'rotate-[-45deg] absolute origin-center my-0 left-0 top-0'
            : 'block my-[5px]',
        ]"
      ></span>
    </button>

    <div class="items-center hidden md:flex">
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

  <!-- Full screan -->
  <div
    :class="[
      { hidden: !menuOpen },
      'fixed top-0 left-0 w-[100vw] h-[100vh] bg-BG-primary z-40 flex flex-col justify-center items-center',
    ]"
  >
    <nav class="">
      <div class="mb-10">
        <!-- Home Link -->
        <template v-if="!isCurrentPage('/')">
          <router-link
            class="font-sortsMillGoudy text-[2rem] transition-opacity duration-300 ease-out hover:opacity-30"
            :to="{ name: 'Home' }"
            @click="closeMenu"
          >
            Home
          </router-link>
        </template>
        <template v-else>
          <span class="font-sortsMillGoudy text-[2rem] text-olive"> Home </span>
        </template>
      </div>

      <div class="mb-10">
        <p
          class="mb-5 font-sortsMillGoudy text-[2rem] transition-opacity duration-300 ease-out hover:opacity-30"
        >
          Works
        </p>
        <ul>
          <li class="mb-5" v-for="(product, index) in caseStudies" :key="index">
            <template v-if="!isCurrentPage('/' + product.id)">
              <router-link :to="'/' + product.id" @click="closeMenu">
                {{ product.name }}
              </router-link>
            </template>
            <template v-else>
              <span class="text-olive">
                {{ product.name }}
              </span>
            </template>
          </li>
        </ul>
      </div>
      <div class="mb-10">
        <!-- About Link -->
        <template v-if="!isCurrentPage('/about')">
          <router-link
            class="font-sortsMillGoudy text-[2rem] transition-opacity duration-300 ease-out hover:opacity-30"
            :to="{ name: 'About' }"
            @click="closeMenu"
          >
            About
          </router-link>
        </template>
        <template v-else>
          <span class="font-sortsMillGoudy text-[2rem] text-olive">
            About
          </span>
        </template>
      </div>
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

  <router-view />

  <footer class="pb-4">
    Copyright © 2024 Yuka Yamada. All rights reserved.
  </footer>
</template>

<script>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed, onMounted, ref, watch } from "vue";

export default {
  setup() {
    // メニューの開閉状態
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };
    const closeMenu = () => {
      menuOpen.value = false;
    };

    // メニューの状態に応じて body にクラスを追加/削除
    watch(menuOpen, (newVal) => {
      if (newVal) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    });

    // 言語切り替え
    const { locale, tm } = useI18n();

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

    const caseStudies = computed(() => {
      return tm("caseStudies");
    });

    // ナビゲーションリンク
    const route = useRoute();

    const isCurrentPage = (path) => {
      return route.path === path;
    };

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      currentLangClass,
      currentLanguage,
      switchLanguage,
      caseStudies,
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
</style>
