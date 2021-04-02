<template>
  <div class="question">
    <HeaderCustom />
    <QuestionWrapper />
  </div>
</template>
<script>
import HeaderCustom from "@/components/HeaderCustom.vue";
import QuestionWrapper from "@/components/questions/QuestionWrapper.vue";

export default {
  name: "Question",
  components: {
    HeaderCustom,
    QuestionWrapper,
  },
};
</script>
<style lang="scss" scoped></style>
