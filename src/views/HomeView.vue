<template>
  <div>
    <main>
      <section>
        <h1 class="text-header02">タイトル</h1>
      </section>
      <section class="w-[min(1040px,81.25vw)] m-auto">
        <ul>
          <li v-for="(item, index) in items" :key="index" class="mb-8">
            <a
              :href="item.link"
              class="grid grid-cols-1 md:grid-cols-custom gap-x-gutter-x"
            >
              <div class="">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="text-left">
                <h2 class="text-header05 mb-5">{{ item.title }}</h2>
                <p class="mb-5">
                  {{ item.description }}
                </p>
                <ul>
                  <li
                    v-for="(tag, idx) in item.tags"
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
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      items: [
        {
          title: "推しタイマー",
          description:
            "しかしだからお自分に蒙り事は多少横着といなが、その女では並べたてとかいう三つがあるばいるたない。",
          image: "/images/sample-img.png",
          link: "/oshitimer",
          tags: ["iOS App"],
        },
        {
          title: "National Gallery",
          description: "このプロジェクトは...",
          image: "/images/sample-img.png",
          link: "/national-gallery",
          tags: ["iOS App", "Coursera"],
        },
        {
          title: "National Gallery",
          description: "このプロジェクトは...",
          image: "/images/sample-img.png",
          link: "/national-gallery",
          tags: ["iOS App", "Coursera"],
        },
      ],
    };
  },
};
</script>
