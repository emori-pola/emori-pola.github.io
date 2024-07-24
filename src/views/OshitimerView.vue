<template>
  <div class="">推しタイマー</div>
  <MoreWorks :excludeLink="'/oshitimer'" />
</template>

<script>
import MoreWorks from "@/components/MoreWorks.vue";

export default {
  name: "OshitimerView",
  components: {
    MoreWorks,
  },
};
</script>
