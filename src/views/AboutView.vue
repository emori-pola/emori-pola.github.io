<template>
  <div class="md:pt-[120px] lg:pt-[130px] pt-[90px]">
    <section
      class="w-[min(1040px,81.25vw)] lg:w-[min(780px,60.9375vw)] m-auto pb-gutter-y-2"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-[min(29.6875vw,380px),1fr] gap-gutter-y-2 md:gap-gutter-x mb-gutter-y-2 md:mb-10"
      >
        <div>
          <img class="mb-5" src="/images/about/profile.png" alt="" />
          <!-- <a class="mr-5" href="">LinkedIn</a>
          <a class="" href="">resume</a> -->
        </div>
        <div class="">
          <p class="text-left mb-4 whitespace-pre-wrap">
            {{ $tm("about.content") }}
          </p>
        </div>
      </div>
      <div>
        <p class="text-left mb-10 whitespace-pre-wrap">
          {{ $tm("about.content2") }}
        </p>
        <p>* * *</p>

        <p class="mt-10 text-left whitespace-pre-wrap">
          {{ $tm("about.content3") }}
        </p>
        <p class="text-left whitespace-pre-wrap">
          {{ $tm("about.content4") }}
        </p>
      </div>
    </section>

    <section class="overflow-hidden">
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
    <section
      class="w-[min(1040px,81.25vw)] md:w-[min(780px,60.9375vw)] m-auto py-gutter-y-2"
    ></section>
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
