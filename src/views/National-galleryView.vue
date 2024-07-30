<template>
  <div class="pt-[160px]">
    <section class="py-gutter-y-2" v-if="caseStudy[0].nationalGallery.name">
      <div class="w-[min(880px,68.75vw)] m-auto">
        <h1 class="text-header02 text-left">
          {{ caseStudy[0].nationalGallery.name }}
        </h1>
        <p class="text-left">
          {{ caseStudy[0].nationalGallery.intro }}
        </p>
      </div>
    </section>
    <section class="bg-BG-secondary py-gutter-y-2">
      <h2 class="text-header01 mb-gutter-y">Overview</h2>
      <ul class="w-[min(880px,68.75vw)] m-auto grid grid-cols-2 gap-gutter-x">
        <li
          v-for="(section, index) in caseStudy[0].nationalGallery.overview"
          :key="index"
        >
          <h3 class="text-header05 text-olive mb-gutter-y-0.5 text-left">
            {{ section.header }}
          </h3>
          <p class="text-left">
            {{ section.content }}
          </p>
        </li>
      </ul>
    </section>
    <section class="w-[min(880px,68.75vw)] m-auto py-gutter-y-2">
      <h2 class="text-header01 mb-gutter-y">Research</h2>
      <p class="text-left w-[min(760px,59.375vw)] m-auto mb-gutter-y">
        {{ caseStudy[0].nationalGallery.research }}
      </p>
      <div class="mb-gutter-y" v-if="caseStudy[0].nationalGallery.painPoints">
        <h3 class="text-header04 text-left py-gutter-y-0.5">pain points</h3>
        <FlexibleCard />
      </div>
      <div class="mb-gutter-y">
        <PersonaCard />
      </div>
      <div class="mb-gutter-y">
        <UserJourneyMap />
      </div>
      <div>
        <h3 class="text-header04 text-left py-gutter-y-0.5">User Flow</h3>
        <img
          :src="caseStudy[0].nationalGallery.userFlow[0].image"
          :alt="caseStudy[0].nationalGallery.userFlow[0].alt"
        />
      </div>
    </section>
    <section class="w-[min(880px,68.75vw)] m-auto py-gutter-y-2">
      <h2 class="text-header01 mb-gutter-y">Design</h2>
      <p class="text-left w-[min(760px,59.375vw)] m-auto mb-gutter-y">
        {{ caseStudy[0].nationalGallery.design }}
      </p>

      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Paper wireframes
        </h3>
        <p class="text-left mb-gutter-y-0.5">
          同じく事実に内談人は同時にその講演だろございばかりに立ち竦んからいないがは矛盾いたないて、ますますにも射しましありうまし。人を云っでしのはどうか今日に無論あっなけれだろ。
        </p>
        <img
          :src="caseStudy[0].nationalGallery.wireframes[0].image"
          :alt="caseStudy[0].nationalGallery.wireframes[0].alt"
        />
      </div>
      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Digital wireframes
        </h3>
        <img
          :src="caseStudy[0].nationalGallery.digitalWireframes[0].image"
          :alt="caseStudy[0].nationalGallery.digitalWireframes[0].alt"
        />
      </div>
      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Low-fidelity prototype
        </h3>
        <img
          :src="caseStudy[0].nationalGallery.lowFidelityPrototype[0].image"
          :alt="caseStudy[0].nationalGallery.lowFidelityPrototype[0].alt"
        />
        <p class="mt-2 text-right">
          <a
            :href="caseStudy[0].nationalGallery.lowFidelityPrototype[0].link"
            target="_blank"
            class="border-b"
            >View Low-fidelity prototype</a
          >
        </p>
      </div>
      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Usability study</h3>
        <p class="text-left mb-gutter-y-0.5">
          {{ caseStudy[0].nationalGallery.usabilityStudy[0].content }}
        </p>
      </div>
      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Mockups</h3>
        <img src="/images/national-gallery/low-fidelity-prototype.png" alt="" />
      </div>
      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          High-fidelity prototype
        </h3>
        <img
          src="/images/national-gallery/high-fidelity-prototype.png"
          alt=""
        />
        <p class="mt-2 text-right">
          <a
            href="https://www.figma.com/proto/uCk4y0U1mv4M7lEsB0s7KW/Audio-guide-app?page-id=22%3A2&node-id=22-3&viewport=963%2C981%2C0.5&scaling=scale-down&starting-point-node-id=22%3A3"
            target="_blank"
            class="border-b"
            >View High-fidelity prototype</a
          >
        </p>
      </div>
    </section>
    <section class="bg-BG-secondary">
      <div class="w-[min(880px,68.75vw)] m-auto py-gutter-y-2">
        <h2 class="text-header01 mb-gutter-y">Next Step</h2>
        <p class="text-left w-[min(760px,59.375vw)] m-auto">
          {{ caseStudy[0].nationalGallery.nextStep }}
        </p>
      </div>
    </section>
    <MoreWorks :excludeLink="'/national-gallery'" />
  </div>
</template>

<script>
import MoreWorks from "@/components/MoreWorks.vue";
import UserJourneyMap from "@/components/UserJourneyMap.vue";
import PersonaCard from "@/components/PersonaCard.vue";
import FlexibleCard from "@/components/FlexibleCard.vue";

import { caseStudy } from "@/case-study-data";

export default {
  name: "National-galleryView",
  data() {
    return {
      caseStudy: caseStudy,
    };
  },
  components: {
    MoreWorks,
    UserJourneyMap,
    PersonaCard,
    FlexibleCard,
  },
};
</script>
