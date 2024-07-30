<template>
  <h3 class="text-header04 text-left py-gutter-y-0.5">User journey map</h3>
  <table class="border-spacing-0 border-collapse table-fixed w-full">
    <thead>
      <tr class="bg-BG-secondary">
        <th
          class="break-words text-wrap w-[min(120px,9.375vw)] p-gutter-x-0.5 border border-white bg-BG-tertiary"
        >
          ACTION
        </th>
        <th
          v-for="(journey, index) in caseStudy[0].nationalGallery.userJourney"
          :key="'action-' + index"
          class="break-words text-wrap p-gutter-x-0.5 border border-white"
        >
          {{ journey.action }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th
          class="break-words text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary"
        >
          TASK LIST
        </th>
        <td
          v-for="(journey, index) in caseStudy[0].nationalGallery.userJourney"
          :key="'task-' + index"
          class="break-words whitespace-pre-line p-gutter-x-0.5 border border-white text-left align-top"
        >
          {{ journey.task }}
        </td>
      </tr>
      <tr>
        <th
          class="break-words text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary"
        >
          FEELING ADJECTIVE
        </th>
        <td
          v-for="(journey, index) in caseStudy[0].nationalGallery.userJourney"
          :key="'feeling-' + index"
          class="break-words whitespace-pre-line p-gutter-x-0.5 border border-white text-left align-top"
        >
          {{ journey.feeling }}
        </td>
      </tr>
      <tr>
        <th
          class="break-words text-wrap p-gutter-x-0.5 border border-white bg-BG-tertiary"
        >
          IMPROVEMENT OPPORTUNITIES
        </th>
        <td
          v-for="(journey, index) in caseStudy[0].nationalGallery.userJourney"
          :key="'opportunities-' + index"
          class="break-words whitespace-pre-line text-wrap p-gutter-x-0.5 border border-white text-left align-top"
        >
          {{ journey.opportunities }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { caseStudy } from "@/case-study-data";

export default {
  data() {
    return {
      caseStudy: caseStudy,
    };
  },
};
</script>
