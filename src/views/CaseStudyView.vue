<!-- src/views/CaseStudyView.vue -->
<template>
  <div class="md:pt-[120px] lg:pt-[120px] pt-[90px]" v-if="caseStudy">
    <section class="relative">
      <div
        v-if="caseStudy.id === 'oshitimer'"
        class="absolute bottom-gutter-y-0.5 right-gutter-x text-right"
      >
        <a
          class="inline-block transition-opacity duration-300 ease-out hover:opacity-70"
          href="https://apps.apple.com/jp/app/%E6%8E%A8%E3%81%97%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/id1503076204"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="w-[clamp(80px,8.515625vw,109px)]"
            src="/images/app_store_badge_jp.svg"
            alt="App Storeからダウンロード"
        /></a>
        <p class="text-[10px] text-BG-tertiary">
          Apple®とApple logo®はApple Inc.の商標です
        </p>
      </div>
      <div
        class="m-auto md:absolute w-[min(1040px,81.25vw)] py-10 whitespace-pre-wrap"
        :class="caseStudy.heroClass"
      >
        <div :class="caseStudy.heroClassWrap">
          <h1
            class="text-header02 mb-4 md:text-header04 lg:text-header02 md:text-left"
          >
            {{ caseStudy.name }}
          </h1>
          <p class="text-left">{{ caseStudy.intro }}</p>
        </div>
      </div>
      <img :src="caseStudy.hero" :alt="caseStudy.name" class="block" />
    </section>

    <section v-if="caseStudy.overview" class="bg-BG-secondary py-20">
      <h2 class="text-header01 mb-gutter-y">Overview</h2>
      <ul
        class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto grid grid-cols-1 md:grid-cols-2 gap-gutter-x"
      >
        <li v-for="(section, index) in caseStudy.overview" :key="index">
          <h3 class="text-header05 text-olive mb-gutter-y-0.5 text-left">
            {{ section.header }}
          </h3>
          <p class="text-left whitespace-pre-wrap">{{ section.content }}</p>
        </li>
      </ul>

      <div
        class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto mt-10 text-left"
      >
        <a
          v-for="(link, index) in caseStudy.link"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block border border-olive p-4 rounded-md mr-2 duration-300 ease-out hover:bg-olive hover:text-BG-primary"
          >{{ link.name }}</a
        >
      </div>
    </section>

    <section
      v-if="caseStudy.research"
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-10">Research</h2>
      <p
        class="text-left whitespace-pre-wrap lg:w-[min(760px,59.375vw)] m-auto mb-10"
      >
        {{ caseStudy.research }}
      </p>
      <div class="mb-10" v-if="caseStudy.painPoints">
        <h3 class="text-header04 text-left mb-6">Pain Points</h3>
        <p class="text-left mb-2">
          {{ caseStudy.painPointsContent }}
        </p>
        <FlexibleCard :data="caseStudy.painPoints" />
      </div>
      <div class="mb-10" v-if="caseStudy.persona">
        <PersonaCard :data="caseStudy.persona" />
      </div>
      <div class="mb-10" v-if="caseStudy.userJourney">
        <UserJourneyMap :data="caseStudy.userJourney" />
      </div>
      <div v-if="caseStudy.competitor">
        <h3 class="text-header04 text-left mb-6">
          {{ caseStudy.competitor[0].header }}
        </h3>
        <p class="text-left mb-6">
          {{ caseStudy.competitor[0].content }}
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-gutter-y md:gap-gutter-x-0.5 mb-6"
        >
          <div
            v-if="caseStudy.competitor[0].strengths"
            class="text-left bg-BG-secondary p-gutter-x-1.5 md:p-gutter-x-0.5"
          >
            <h4 class="text-header06 text-olive mb-2 text-left">強み</h4>
            <ul>
              <li
                v-for="(section, index) in caseStudy.competitor[0].strengths"
                :key="index"
              >
                {{ section }}
              </li>
            </ul>
          </div>
          <div
            v-if="caseStudy.competitor[0].weaknesses"
            class="text-left bg-BG-secondary p-gutter-x-1.5 md:p-gutter-x-0.5"
          >
            <h4 class="text-header06 text-olive mb-2 text-left">弱み</h4>
            <ul>
              <li
                v-for="(section, index) in caseStudy.competitor[0].weaknesses"
                :key="index"
              >
                {{ section }}
              </li>
            </ul>
          </div>
          <div
            v-if="caseStudy.competitor[0].ideal"
            class="text-left bg-BG-secondary p-gutter-x-1.5 md:p-gutter-x-0.5"
          >
            <h4 class="text-header06 text-olive mb-2 text-left">理想</h4>
            <ul>
              <li
                v-for="(section, index) in caseStudy.competitor[0].ideal"
                :key="index"
              >
                {{ section }}
              </li>
            </ul>
          </div>
        </div>
        <p class="text-left">
          {{ caseStudy.researchResult }}
        </p>
      </div>
    </section>
    <section
      v-if="caseStudy.definingTheProblems"
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-gutter-y">Defining the Problems</h2>
      <p class="text-left mb-6">
        {{ caseStudy.definingTheProblemsContent }}
      </p>
      <div
        v-for="(section, index) in caseStudy.definingTheProblems"
        :key="index"
      >
        <h3 class="text-header05 text-left mb-2">{{ section.name }}</h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <li class="md:col-span-2 py-10 px-6 border border-Label-primary">
            <h3 class="text-header03 mb-2">User Story</h3>
            <p class="text-left whitespace-pre-wrap max-w-[760px] m-auto">
              {{ section.userStory }}
            </p>
          </li>
          <li class="py-10 px-6 border border-Label-primary">
            <h3 class="text-header03 mb-4">Problem Statement</h3>
            <p class="text-left whitespace-pre-wrap">
              {{ section.problemStatement }}
            </p>
          </li>
          <li class="py-10 px-6 border border-Label-primary">
            <h3 class="text-header03 mb-4">Goal Statement</h3>
            <p class="text-left whitespace-pre-wrap">
              {{ section.goalStatement }}
            </p>
          </li>
        </ul>
      </div>
      <div v-if="caseStudy.storyboard" class="mb-8">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Storyboard</h3>
        <p class="text-left mb-4">
          {{ caseStudy.storyboard.content }}
        </p>
        <p class="mb-6">
          <img
            :src="caseStudy.storyboard.bigPicture.image"
            :alt="caseStudy.storyboard.bigPicture.alt"
          />
        </p>
        <p>
          <img
            :src="caseStudy.storyboard.closeUp.image"
            :alt="caseStudy.storyboard.closeUp.alt"
          />
        </p>
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
      v-if="caseStudy.prototype"
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-gutter-y">Prototype</h2>
      <p class="text-left lg:w-[min(760px,59.375vw)] m-auto mb-gutter-y">
        {{ caseStudy.prototype }}
      </p>
      <div v-if="caseStudy.sketch" class="mb-gutter-y">
        <h3 class="text-header04 text-left mb-gutter-y-0.5">Sketch</h3>
        <img :src="caseStudy.sketch[0].image" :alt="caseStudy.sketch[0].alt" />
        <p class="mt-2 text-label01">{{ caseStudy.sketch[0].caption }}</p>
      </div>
      <div v-if="caseStudy.animation" class="mb-gutter-y">
        <h3 class="text-header04 text-left mb-gutter-y-0.5">Animation</h3>
        <p class="text-left mb-4">
          {{ caseStudy.animation[0].content }}
        </p>
        <div class="text-center w-full bg-[#b5beab] py-10 px-10">
          <img
            class="inline h-[500px]"
            :src="caseStudy.animation[0].image"
            :alt="caseStudy.animation[0].alt"
          />
        </div>
        <p class="mt-2 text-label01">{{ caseStudy.animation[0].caption }}</p>

        <p class="mt-4">
          <img :src="caseStudy.photo[0].image" :alt="caseStudy.photo[0].alt" />
        </p>
        <p class="mt-2 text-label01">{{ caseStudy.photo[0].caption }}</p>
      </div>

      <div v-if="caseStudy.wireframes" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Paper wireframes
        </h3>
        <p class="text-left mb-gutter-y-0.5">
          {{ caseStudy.wireframes.content }}
        </p>
        <img
          :src="caseStudy.wireframes.images[0].image"
          :alt="caseStudy.wireframes.images[0].alt"
        />
        <p class="mt-2 text-label01">
          {{ caseStudy.wireframes.images[0].caption }}
        </p>
      </div>
      <div v-if="caseStudy.digitalWireframes" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Digital wireframes
        </h3>
        <p class="text-left mb-4">
          {{ caseStudy.digitalWireframes.content }}
        </p>
        <img
          :src="caseStudy.digitalWireframes.images[0].image"
          :alt="caseStudy.digitalWireframes.images[0].alt"
        />
      </div>
      <div v-if="caseStudy.lowFidelityPrototype" class="">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Low-fidelity prototype
        </h3>
        <p class="text-left mb-4">
          {{ caseStudy.lowFidelityPrototype.content }}
        </p>
        <img
          :src="caseStudy.lowFidelityPrototype.images[0].image"
          :alt="caseStudy.lowFidelityPrototype.images[0].alt"
        />
        <p class="text-right mt-2">
          <a
            :href="caseStudy.lowFidelityPrototype.images[0].link"
            target="_blank"
            class="border-b border-Link-primary text-Link-primary"
            >View Low-fidelity prototype</a
          >
        </p>
      </div>
    </section>
    <section
      v-if="caseStudy.usabilityTest"
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-gutter-y-2"
    >
      <!-- <UsabilityTest :data="caseStudy.usabilityTestLow" /> -->

      <h2 class="text-header01 mb-gutter-y">Usability Test</h2>
      <div class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Usability study</h3>
        <p class="text-left mb-gutter-y-0.5 whitespace-pre-wrap">
          {{ caseStudy.usabilityTest.usabilityStudy[0].content }}
        </p>
      </div>
      <div v-if="caseStudy.usabilityTest.affinityDiagram" class="mb-8">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Affinity diagram
        </h3>
        <p class="text-left mb-4">
          {{ caseStudy.usabilityTest.affinityDiagram.content }}
        </p>
        <img
          :src="caseStudy.usabilityTest.affinityDiagram.images[0].image"
          :alt="caseStudy.usabilityTest.affinityDiagram.images[0].alt"
        />
      </div>
      <div v-if="caseStudy.usabilityTest.prioritizedInsights" class="">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Prioritized Insights
        </h3>
        <p class="text-left mb-8">
          {{ caseStudy.usabilityTest.prioritizedInsights.content }}
        </p>
        <ul>
          <li
            v-for="(section, index) in caseStudy.usabilityTest
              .prioritizedInsights.lists"
            :key="index"
            class="mb-8 grid md:grid-cols-2 gap-gutter-x bg-BG-secondary p-10 last:mb-0"
          >
            <div class="">
              <div>
                <p class="text-header03 mb-5">0{{ index + 1 }}</p>
                <h4 class="text-left text-header06 mb-6">
                  {{ section.header }}
                </h4>
              </div>
              <p class="text-left whitespace-pre-wrap mb-5">
                {{ section.content }}
              </p>
              <p>{{ section.quotes }}</p>
              <p>{{ section.modify }}</p>
            </div>
            <img :src="section.image" alt="" />
          </li>
        </ul>
      </div>
    </section>
    <section
      v-if="caseStudy.design"
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-gutter-y">Design</h2>
      <p
        class="text-left whitespace-pre-wrap lg:w-[min(760px,59.375vw)] m-auto mb-5"
      >
        {{ caseStudy.design }}
      </p>
      <div v-if="caseStudy.mockups" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Mockups</h3>
        <div
          class="mb-8"
          v-for="(mockup, index) in caseStudy.mockups"
          :key="index"
        >
          <img :src="mockup.image" :alt="mockup.alt" />
          <p class="mt-2 text-label01">{{ mockup.caption }}</p>
        </div>
      </div>
      <div v-if="caseStudy.highFidelityPrototype" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          High-fidelity prototype
        </h3>
        <img
          :src="caseStudy.highFidelityPrototype[0].image"
          :alt="caseStudy.highFidelityPrototype[0].alt"
        />
        <p class="mt-2 text-right">
          <a
            :href="caseStudy.highFidelityPrototype[0].link"
            target="_blank"
            class="border-b border-Link-primary text-Link-primary"
            >View High-fidelity prototype</a
          >
        </p>
      </div>
      <div v-if="caseStudy.logo">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Icon</h3>
        <img :src="caseStudy.logo[0].image" :alt="caseStudy.logo[0].alt" />
        <p class="mt-2 text-label01">{{ caseStudy.logo[0].caption }}</p>
      </div>
      <div v-if="caseStudy.website">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Web site</h3>
        <p class="text-left mb-2">{{ caseStudy.website.content }}</p>
        <img
          :src="caseStudy.website.images[0].image"
          :alt="caseStudy.website.images[0].alt"
        />
        <p class="mt-2 text-right">
          <a
            :href="caseStudy.website.images[0].link"
            target="_blank"
            class="border-b border-Link-primary text-Link-primary"
            >View High-fidelity prototype</a
          >
        </p>
      </div>
    </section>
    <section v-if="caseStudy.nextStep" class="bg-BG-secondary">
      <div
        class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
      >
        <h2 class="text-header01 mb-gutter-y">Next Step</h2>
        <p
          class="text-left lg:w-[min(760px,59.375vw)] m-auto whitespace-pre-wrap"
        >
          {{ caseStudy.nextStep }}
        </p>
      </div>
    </section>

    <MoreWorks :excludeLink="caseStudy.id" />
  </div>
</template>

<script>
// import { caseStudyData } from "@/case-study-data";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import MoreWorks from "@/components/MoreWorks.vue";
import UserJourneyMap from "@/components/UserJourneyMap.vue";
import PersonaCard from "@/components/PersonaCard.vue";
import FlexibleCard from "@/components/FlexibleCard.vue";
// import UsabilityTest from "@/components/UsabilityTest.vue";

export default {
  name: "CaseStudyView",
  components: {
    MoreWorks,
    UserJourneyMap,
    PersonaCard,
    FlexibleCard,
    // UsabilityTest,
  },
  setup() {
    const { tm } = useI18n();
    const route = useRoute();
    const caseStudyId = computed(() => route.params.id);

    const caseStudy = computed(() => {
      const id = caseStudyId.value;
      const data = tm(`caseStudies`).find((study) => study.id === id);
      return data;
    });

    return {
      caseStudy,
    };
  },
};
</script>
