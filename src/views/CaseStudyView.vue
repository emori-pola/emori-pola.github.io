<!-- src/views/CaseStudyView.vue -->
<template>
  <div class="pt-[160px]" v-if="caseStudy">
    <section class="py-gutter-y-2">
      <div class="w-[min(880px,68.75vw)] m-auto">
        <h1 class="text-header02 text-left">{{ caseStudy.name }}</h1>
        <p class="text-left">{{ caseStudy.intro }}</p>
      </div>
    </section>

    <section v-if="caseStudy.overview" class="bg-BG-secondary py-gutter-y-2">
      <h2 class="text-header01 mb-gutter-y">Overview</h2>
      <ul class="w-[min(880px,68.75vw)] m-auto grid grid-cols-2 gap-gutter-x">
        <li v-for="(section, index) in caseStudy.overview" :key="index">
          <h3 class="text-header05 text-olive mb-gutter-y-0.5 text-left">
            {{ section.header }}
          </h3>
          <p class="text-left">{{ section.content }}</p>
        </li>
      </ul>
    </section>

    <section
      v-if="caseStudy.research"
      class="w-[min(880px,68.75vw)] m-auto py-gutter-y-2"
    >
      <h2 class="text-header01 mb-gutter-y">Research</h2>
      <p class="text-left w-[min(760px,59.375vw)] m-auto mb-gutter-y">
        {{ caseStudy.research }}
      </p>
      <div class="mb-gutter-y" v-if="caseStudy.painPoints">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Pain Points</h3>
        <FlexibleCard :data="caseStudy.painPoints" />
      </div>
      <div class="mb-gutter-y" v-if="caseStudy.persona">
        <PersonaCard :data="caseStudy.persona" />
      </div>
      <div class="mb-gutter-y" v-if="caseStudy.userJourney">
        <UserJourneyMap :data="caseStudy.userJourney" />
      </div>
      <div v-if="caseStudy.userFlow">
        <h3 class="text-header04 text-left py-gutter-y-0.5">User Flow</h3>
        <img
          :src="caseStudy.userFlow[0].image"
          :alt="caseStudy.userFlow[0].alt"
        />
      </div>
    </section>
    <section
      v-if="caseStudy.design"
      class="w-[min(880px,68.75vw)] m-auto py-gutter-y-2"
    >
      <h2 class="text-header01 mb-gutter-y">Design</h2>
      <p class="text-left w-[min(760px,59.375vw)] m-auto mb-gutter-y">
        {{ caseStudy.design }}
      </p>

      <div v-if="caseStudy.wireframes" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Paper wireframes
        </h3>
        <p class="text-left mb-gutter-y-0.5">
          同じく事実に内談人は同時にその講演だろございばかりに立ち竦んからいないがは矛盾いたないて、ますますにも射しましありうまし。人を云っでしのはどうか今日に無論あっなけれだろ。
        </p>
        <img
          :src="caseStudy.wireframes[0].image"
          :alt="caseStudy.wireframes[0].alt"
        />
      </div>
      <div v-if="caseStudy.digitalWireframes" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Digital wireframes
        </h3>
        <img
          :src="caseStudy.digitalWireframes[0].image"
          :alt="caseStudy.digitalWireframes[0].alt"
        />
      </div>
      <div v-if="caseStudy.lowFidelityPrototype" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Low-fidelity prototype
        </h3>
        <img
          :src="caseStudy.lowFidelityPrototype[0].image"
          :alt="caseStudy.lowFidelityPrototype[0].alt"
        />
        <p class="mt-2 text-right">
          <a
            :href="caseStudy.lowFidelityPrototype[0].link"
            target="_blank"
            class="border-b"
            >View Low-fidelity prototype</a
          >
        </p>
      </div>
      <div v-if="caseStudy.usabilityStudy" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Usability study</h3>
        <p class="text-left mb-gutter-y-0.5">
          {{ caseStudy.usabilityStudy[0].content }}
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
    <section v-if="caseStudy.nextStep" class="bg-BG-secondary">
      <div class="w-[min(880px,68.75vw)] m-auto py-gutter-y-2">
        <h2 class="text-header01 mb-gutter-y">Next Step</h2>
        <p class="text-left w-[min(760px,59.375vw)] m-auto">
          {{ caseStudy.nextStep }}
        </p>
      </div>
    </section>

    <MoreWorks :excludeLink="caseStudy.id" />
  </div>
</template>

<script>
import { caseStudyData } from "@/case-study-data";
import MoreWorks from "@/components/MoreWorks.vue";
import UserJourneyMap from "@/components/UserJourneyMap.vue";
import PersonaCard from "@/components/PersonaCard.vue";
import FlexibleCard from "@/components/FlexibleCard.vue";

export default {
  name: "CaseStudyView",
  components: {
    MoreWorks,
    UserJourneyMap,
    PersonaCard,
    FlexibleCard,
  },
  data() {
    return {
      caseStudy: null,
    };
  },
  computed: {
    caseStudyId() {
      console.log("Route parameter id:", this.$route.params.id); // デバッグ用
      return this.$route.params.id;
    },
  },
  watch: {
    caseStudyId: {
      handler(newId) {
        this.loadCaseStudy(newId);
      },
      immediate: true,
    },
  },
  methods: {
    loadCaseStudy(id) {
      const study = caseStudyData.find((study) => study.id === id);
      if (study) {
        this.caseStudy = study;
        console.log("Loaded case study:", this.caseStudy); // デバッグ用
      } else {
        console.log("Case study not found for id:", id); // デバッグ用
      }
    },
  },
};
</script>
