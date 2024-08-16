<template>
  <h3 class="text-header04 text-left py-gutter-y-0.5">ペルソナ</h3>
  <p class="text-left mb-4">
    {{ data.content }}
  </p>
  <div
    v-for="(card, index) in data.personas"
    :key="index"
    class="border border-Label-primary grid gap-gutter-x lg:grid-cols-[min(230px,19.53125vw),1fr] p-gutter-x mb-gutter-y"
  >
    <div
      class="px-gutter-x-0.5 lg:px-0 md:grid md:grid-cols-[240px,1fr] md:gap-gutter-x lg:block"
    >
      <div class="text-center w-full">
        <img
          class="inline-block md:block md:w-[240px] w-[200px] lg:w-full"
          :src="card.image"
          :alt="card.alt"
        />
      </div>
      <div>
        <p class="text-header04 py-4 md:text-left">{{ card.name }}</p>
        <dl
          class="grid grid-cols-[10ch,1fr] gap-x-4 gap-y-3 text-left leading-tight"
        >
          <dt class="">Age</dt>
          <dd class="">{{ card.age }}</dd>
          <dt class="">Education</dt>
          <dd class="">{{ card.education }}</dd>
          <dt class="">Hometown</dt>
          <dd class="">{{ card.hometown }}</dd>
          <dt class="">Family</dt>
          <dd class="">{{ card.family }}</dd>
          <dt class="">Occupation</dt>
          <dd class="">{{ card.occupation }}</dd>
        </dl>
      </div>
    </div>
    <div>
      <p
        class="text-header05 leading-normal px-gutter-x-0.5 mt-4 mb-8 text-left whitespace-pre-wrap"
      >
        “{{ card.header }}”
      </p>
      <div class="md:grid grid-cols-2 gap-8 mb-8 px-gutter-x-0.5">
        <div class="text-left mb-5 md:mb-0">
          <p class="text-header06 mb-2 text-olive">Goals</p>
          <ul>
            <li v-for="(goal, idx) in card.goals" :key="idx">
              {{ goal }}
            </li>
          </ul>
        </div>
        <div class="text-left">
          <p class="text-header06 mb-2 text-olive">Frustrations</p>
          <ul>
            <li v-for="(frustration, idx) in card.frustrations" :key="idx">
              {{ frustration }}
            </li>
          </ul>
        </div>
      </div>
      <p class="border-t border-Label-primary pt-5 px-gutter-x-0.5 text-left">
        {{ card.bio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonaCard",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
