<template>
  <div class="flex z-50 fixed justify-between">
    <div><img src="" alt="" /></div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <div :class="currentLangClass">
      <button @click="switchLanguage('en')">English</button>
      <button @click="switchLanguage('ja')">日本語</button>
      <p>{{ $t("message.hello") }}</p>
    </div>
  </div>

  <router-view />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
