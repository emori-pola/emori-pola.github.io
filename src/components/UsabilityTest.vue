<template>
  <h2 class="text-header01 mb-gutter-y">Usability Test</h2>
  <div class="mb-gutter-y">
    <h3 class="text-header04 text-left py-gutter-y-0.5">Usability study</h3>
    <p class="text-left mb-gutter-y-0.5 whitespace-pre-wrap">
      {{ data.usabilityTest.usabilityStudy[0].content }}
    </p>
  </div>
  <div v-if="data.usabilityTest.affinityDiagram" class="mb-8">
    <h3 class="text-header04 text-left py-gutter-y-0.5">Affinity diagram</h3>
    <p class="text-left mb-4">
      {{ data.usabilityTest.affinityDiagram.content }}
    </p>
    <img
      :src="data.usabilityTest.affinityDiagram.images[0].image"
      :alt="data.usabilityTest.affinityDiagram.images[0].alt"
    />
  </div>
  <div v-if="data.usabilityTest.prioritizedInsights" class="">
    <h3 class="text-header04 text-left py-gutter-y-0.5">
      Prioritized Insights
    </h3>
    <p class="text-left mb-8">
      {{ data.usabilityTest.prioritizedInsights.content }}
    </p>
    <ul>
      <li
        v-for="(section, index) in data.usabilityTest.prioritizedInsights.lists"
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
</template>

<script>
export default {
  name: "UsabilityTest",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log("ユーザビリティテスト--" + this.data); // data が正しく渡されているか確認
  },
};
</script>
