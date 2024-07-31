<template>
  <div class="pt-[160px]">
    <section class="w-[min(780px,60.9375vw)] m-auto pb-gutter-y-2">
      <div
        class="grid grid-cols-[min(29.6875vw,380px),1fr] gap-gutter-x mb-gutter-y-1.5"
      >
        <img src="/images/about/profile.png" alt="" />
        <div class="pt-gutter-y">
          <p class="text-left mb-4">
            {{ $tm("about.content") }}
          </p>
          <a class="block text-right mb-2" href="">LinkedIn</a>
          <a class="block text-right" href="">resume</a>
        </div>
      </div>
      <div>
        <p class="text-left mb-gutter-y">
          {{ $tm("about.content2") }}
        </p>
        <p class="text-left">
          {{ $tm("about.content3") }}
        </p>
      </div>
    </section>
    <section>
      <div
        class="grid grid-cols-12 gap-1 w-max animate-[scroll_30s_linear_infinite] whitespace-nowrap mb-1"
      >
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-01.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-02.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-03.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-04.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-05.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-06.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-01.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-02.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-03.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-04.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-05.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-06.jpg"
          alt=""
        />
      </div>
      <div
        class="grid grid-cols-10 gap-1 w-max animate-[rscroll_30s_linear_infinite] whitespace-nowrap"
      >
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-07.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-08.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-09.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-10.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-11.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-07.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-08.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-09.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-10.jpg"
          alt=""
        />
        <img
          class="w-[min(39.0625vw,500px)]"
          src="/images/about/photo-11.jpg"
          alt=""
        />
      </div>
    </section>
    <section class="w-[min(780px,60.9375vw)] m-auto py-gutter-y-2">
      <div>
        <p class="text-left">
          {{ $tm("about.content4") }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "AboutView",
  setup() {
    const { tm } = useI18n();
    return { tm };
  },
};
</script>
