<template>
  <div class="py-[120px]">
    <h1 class="text-header02 mb-5">Page Not Found</h1>
    <p class="mb-20">The page you are looking for does not exist.</p>
    <router-link
      class="inline-block border border-olive p-4 rounded-md mr-2 duration-300 ease-out hover:bg-olive hover:text-BG-primary"
      to="/"
      >Go back to Home</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
