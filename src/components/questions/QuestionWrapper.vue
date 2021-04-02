<template>
  <div class="question-wrapper">
    <ProgressBar />
    <QuestionItem />
    <QuestionResult />
  </div>
</template>
<script>
import ProgressBar from "@/components/questions/QuestionProgressBar.vue";
import QuestionItem from "@/components/questions/QuestionItem.vue";
import QuestionResult from "@/components/questions/QuestionResult.vue";
import { mapActions } from "vuex";

export default {
  name: "QuestionWrapper",
  components: {
    ProgressBar,
    QuestionItem,
    QuestionResult,
  },
  methods: {
    ...mapActions(["SEARCH_MAX_NUMBER_ACTIONS"]),
  },
  mounted() {
    this.SEARCH_MAX_NUMBER_ACTIONS();
  },
};
</script>
<style lang="scss" scoped></style>
