<!-- src/views/CaseStudyView.vue -->
<template>
  <div class="md:pt-[140px] lg:pt-[160px] pt-[90px]" v-if="caseStudy">
    <section class="py-gutter-y-2">
      <div class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto">
        <h1 class="text-header02 text-left">{{ caseStudy.name }}</h1>
        <p class="text-left">{{ caseStudy.intro }}</p>
      </div>
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
          インタビューによって明確になった問題を次の4つにまとめました。
        </p>
        <FlexibleCard :data="caseStudy.painPoints" />
      </div>
      <div class="mb-10" v-if="caseStudy.persona">
        <PersonaCard :data="caseStudy.persona" />
      </div>
      <div class="mb-10" v-if="caseStudy.userJourney">
        <UserJourneyMap :data="caseStudy.userJourney" />
      </div>
      <div>
        <h3 class="text-header04 text-left mb-6">競合調査</h3>
        <p class="text-left mb-6">
          業界理解のためにオーディオガイドアプリを出している競合がどのような体験を提供しているのか、調査を実施しました。
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-gutter-y md:gap-gutter-x-0.5 mb-6"
        >
          <p class="text-left bg-BG-secondary p-gutter-x-1.5 md:p-gutter-x-0.5">
            強み<br />
            マップを使用していて現在地もわかる<br />信頼性のある解説<br />
            美術館にいなくても使用できる<br />ブックマーク機能<br />チケットの予約
          </p>
          <p class="text-left bg-BG-secondary p-gutter-x-1.5 md:p-gutter-x-0.5">
            弱み<br />
            マップが重い<br />
            対応している言語が少ない<br />
            スクリーンリーダーが対応していない<br />
            わからない単語を調べたくてもテキストのコピーができない
          </p>
        </div>
        <p class="text-left">
          以上の調査から言語が対応していない場合のサポートを提供することでアプリの価値をより高められるのではないかと確信しました。
        </p>
      </div>
    </section>
    <section
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-gutter-y">Defining the Problems</h2>
      <p class="text-left mb-6">
        ここまでの調査をもとにガブリエルのさらなる理解のため問題の提起を行いました。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div
          v-if="caseStudy.userStory"
          class="md:col-span-2 py-10 px-6 border border-Label-primary"
        >
          <h3 class="text-header03 mb-2">User Story</h3>
          <p class="text-header06 mb-2">
            {{ caseStudy.userStory[0].user }}
          </p>
          <p class="text-header06 mb-2">
            {{ caseStudy.userStory[0].action }}
          </p>
          <p class="text-header06">
            {{ caseStudy.userStory[0].benefit }}
          </p>
        </div>
        <div class="py-10 px-6 border border-Label-primary">
          <h3 class="text-header03 mb-4">Problem Statement</h3>
          <p class="text-left mb-4">Gabriel is a Foreigner student</p>
          <p class="text-left mb-4">
            who needs to completely understand of the content of the audio guide
            if they select non-native language
          </p>
          <p class="text-left">
            because they can pay the same amount of money and receive equivalent
            services whether their native language or not
          </p>
        </div>
        <div class="py-10 px-6 border border-Label-primary">
          <h3 class="text-header03 mb-4">Goal Statement</h3>
          <p class="text-left mb-4">
            Our Audio guide app will let users use an audio playback function
            that makes it easy for anyone to understand the content
          </p>
          <p class="text-left mb-4">
            which will affect visitor who use the audio app in languages other
            than their native language
          </p>
          <p class="text-left mb-4">by giving them to ability to enjoy same</p>
          <p class="text-left">
            We will measure effectiveness by tracking uses the function in app
          </p>
        </div>
      </div>
      <div class="mb-8">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          ストーリーボード
        </h3>
        <p class="text-left mb-4">
          実際にガブリエルがアプリを使用する場面を想定してストーリーボードを書き起こしました。
        </p>
        <p class="mb-6">
          <img
            src="/images/national-gallery/storyboard_bigpicture.jpg"
            alt=""
          />
        </p>
        <p>
          <img src="/images/national-gallery/storyboard_closeup.jpg" alt="" />
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
      v-if="caseStudy.design"
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-gutter-y">Prototype</h2>
      <p class="text-left lg:w-[min(760px,59.375vw)] m-auto mb-gutter-y">
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
        <p class="text-left mb-4">
          Paper wireframeをもとにさらにブラッシュアップしたDigital
          wireframesをFigmaで作成しました。
        </p>
        <img
          :src="caseStudy.digitalWireframes[0].image"
          :alt="caseStudy.digitalWireframes[0].alt"
        />
      </div>
      <div v-if="caseStudy.lowFidelityPrototype" class="">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Low-fidelity prototype
        </h3>
        <p class="text-left mb-4">
          Digital
          wireframesをもとにプロトタイプを作り、足りない画面を追加で作成しました。
        </p>
        <img
          :src="caseStudy.lowFidelityPrototype[0].image"
          :alt="caseStudy.lowFidelityPrototype[0].alt"
        />
        <p class="text-right mt-2">
          <a
            :href="caseStudy.lowFidelityPrototype[0].link"
            target="_blank"
            class="border-b border-Link-primary text-Link-primary"
            >View Low-fidelity prototype</a
          >
        </p>
      </div>
    </section>
    <section
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-gutter-y-2"
    >
      <h2 class="text-header01 mb-gutter-y">Usability Test</h2>
      <div v-if="caseStudy.usabilityStudy" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Usability study</h3>
        <p class="text-left mb-gutter-y-0.5">
          {{ caseStudy.usabilityStudy[0].content }}
        </p>
      </div>
      <div v-if="caseStudy.affinityDiagram" class="mb-8">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Affinity diagram
        </h3>
        <img
          :src="caseStudy.affinityDiagram[0].image"
          :alt="caseStudy.affinityDiagram[0].alt"
        />
      </div>
      <div v-if="caseStudy.prioritizedInsights" class="">
        <h3 class="text-header04 text-left py-gutter-y-0.5">
          Prioritized Insights
        </h3>
        <p class="text-left mb-8">
          ユーザビリティテストの中から優先度の高い変更を３つに絞りました。
        </p>
        <ul>
          <li
            v-for="(section, index) in caseStudy.prioritizedInsights"
            :key="index"
            class="mb-8 grid md:grid-cols-2 gap-gutter-x"
          >
            <div class="">
              <h4 class="text-left text-header06 mb-6">
                {{ index + 1 }}.{{ section.header }}
              </h4>
              <p class="text-left whitespace-pre-wrap">{{ section.content }}</p>
            </div>
            <img :src="section.image" alt="" />
          </li>
        </ul>
      </div>
    </section>
    <section
      class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
    >
      <h2 class="text-header01 mb-gutter-y">Design</h2>
      <p>ユーザビリティテストの結果をもとにモックアップの作成を行いました。</p>
      <div v-if="caseStudy.mockups" class="mb-gutter-y">
        <h3 class="text-header04 text-left py-gutter-y-0.5">Mockups</h3>
        <img
          :src="caseStudy.mockups[0].image"
          :alt="caseStudy.mockups[0].alt"
        />
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
    </section>
    <section v-if="caseStudy.nextStep" class="bg-BG-secondary">
      <div
        class="w-[min(1040px,81.25vw)] lg:w-[min(880px,68.75vw)] m-auto py-20"
      >
        <h2 class="text-header01 mb-gutter-y">Next Step</h2>
        <p class="text-left lg:w-[min(760px,59.375vw)] m-auto">
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

export default {
  name: "CaseStudyView",
  components: {
    MoreWorks,
    UserJourneyMap,
    PersonaCard,
    FlexibleCard,
  },
  setup() {
    const { tm } = useI18n();
    const route = useRoute();
    const caseStudyId = computed(() => route.params.id);

    const caseStudy = computed(() => {
      const id = caseStudyId.value;
      const data = tm(`caseStudies`).find((study) => study.id === id);
      console.log("Loaded case study data:", data); // デバッグ用
      return data;
    });

    console.log("Case study ID:", caseStudyId.value); // デバッグ用

    return {
      caseStudy,
    };
  },
};
</script>
