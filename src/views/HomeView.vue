<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    あああ
    <router-link to="/about">About</router-link>
    <div class="bg-gradient-to-r from-green-400 to-blue-500">tailwind</div>

    <div>
      <h2>title</h2>
      作品説明
      <div><span>tag</span></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
