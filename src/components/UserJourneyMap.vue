<!-- src/components/UserJourneyMap.vue -->
<template>
  <div>
    <h3 class="text-header04 text-left my-gutter-y-0.5">User journey map</h3>
    <p class="text-left my-gutter-y-0.5">
      ペルソナの中で特に重要なペルソナのガブリエルがどのような体験をするかユーザージャーニーマップを作成しました。
    </p>
    <div
      v-for="(persona, personaIndex) in data"
      :key="'persona-' + personaIndex"
      class="mb-10"
    >
      <h4 class="text-header05 text-left mb-2">
        {{ persona.name }}
      </h4>
      <div class="overflow-auto relative whitespace-nowrap">
        <table class="border-spacing-0 border-collapse table-fixed w-full">
          <thead>
            <tr class="bg-BG-secondary">
              <th
                class="break-words w-[90px] md:w-full text-center left-0 text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary sticky"
              >
                Action
              </th>
              <th
                v-for="(journey, index) in persona.table"
                :key="'action-' + index"
                class="break-words w-[200px] md:w-full whitespace-pre-line text-wrap p-gutter-x-0.5 border border-white"
              >
                {{ journey.action }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                class="break-words left-0 text-center text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary sticky"
              >
                Task List
              </th>
              <td
                v-for="(journey, index) in persona.table"
                :key="'task-' + index"
                class="break-words w-[200px] md:w-full whitespace-pre-line p-gutter-x-0.5 border border-white text-left align-top"
              >
                {{ journey.task }}
              </td>
            </tr>
            <tr>
              <th
                class="break-words left-0 text-center text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary sticky"
              >
                Feeling Adjective
              </th>
              <td
                v-for="(journey, index) in persona.table"
                :key="'feeling-' + index"
                class="break-words w-[200px] md:w-full whitespace-pre-line p-gutter-x-0.5 border border-white text-left align-top"
              >
                {{ journey.feeling }}
              </td>
            </tr>
            <tr>
              <th
                class="break-words left-0 text-center text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary sticky"
              >
                Improvement Opportunities
              </th>
              <td
                v-for="(journey, index) in persona.table"
                :key="'opportunities-' + index"
                class="break-words w-[200px] md:w-full whitespace-pre-line text-wrap p-gutter-x-0.5 border border-white text-left align-top"
              >
                {{ journey.opportunities }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserJourneyMap",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
