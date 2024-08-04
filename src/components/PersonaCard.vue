<template>
  <h3 class="text-header04 text-left py-gutter-y-0.5">ペルソナ</h3>
  <p class="text-left mb-4">
    インタビューの実施、そこからの洞察によって導き出されたペルソナは2人です。
  </p>
  <div
    v-for="(card, index) in data"
    :key="index"
    class="border border-Label-primary grid gap-gutter-x lg:grid-cols-[min(230px,19.53125vw),1fr] p-gutter-x mb-gutter-y"
  >
    <div
      class="md:grid md:grid-cols-2 md:gap-gutter-x lg:grid-cols-none lg:gap-0"
    >
      <img
        class="md:w-[240px] w-[200px] lg:w-full"
        :src="card.image"
        :alt="card.alt"
      />
      <div>
        <p class="text-header04 py-4 md:text-left">{{ card.name }}</p>
        <dl class="grid grid-cols-2 text-left">
          <dt>Age</dt>
          <dd>{{ card.age }}</dd>
          <dt>Education</dt>
          <dd>{{ card.education }}</dd>
          <dt>Hometown</dt>
          <dd>{{ card.hometown }}</dd>
          <dt>Family</dt>
          <dd>{{ card.family }}</dd>
          <dt>Occupation</dt>
          <dd>{{ card.occupation }}</dd>
        </dl>
      </div>
    </div>
    <div>
      <p class="text-header04 mb-8">“{{ card.header }}”</p>
      <div class="grid grid-cols-2 gap-gutter-x-0.5 mb-8 px-gutter-x-0.5">
        <div class="text-left">
          <p class="text-header06 text-olive">Goals</p>
          <ul>
            <li v-for="(goal, idx) in card.goals" :key="idx">
              {{ goal }}
            </li>
          </ul>
        </div>
        <div class="text-left">
          <p class="text-header06 text-olive">Frustrations</p>
          <ul>
            <li v-for="(frustration, idx) in card.frustrations" :key="idx">
              {{ frustration }}
            </li>
          </ul>
        </div>
      </div>
      <p
        class="border-t border-Label-primary pt-gutter-y-0.5 px-gutter-x-0.5 text-left"
      >
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
