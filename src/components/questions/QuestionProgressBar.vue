<template>
  <div class="question-progress-bar" v-if="NUMBER <= MAX_NUMBER_QUESTION">
    <div class="question-progress-bar__item" id="progresBar"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "QuestionProgressBar",
  mounted() {
    if (this.NUMBER <= this.MAX_NUMBER_QUESTION) {
      const progresBar = document.getElementById("progresBar");
      progresBar.style.width = 100 / this.MAX_NUMBER_QUESTION + "%";
    }
  },
  updated() {
    if (this.NUMBER <= this.MAX_NUMBER_QUESTION) {
      const progresBar = document.getElementById("progresBar");
      let width =
        100 - (100 / this.MAX_NUMBER_QUESTION) * this.MAX_ITEM_QUESTION;
      progresBar.style.width = `${width}` + "%";
    }
  },
  computed: {
    ...mapGetters(["NUMBER", "MAX_NUMBER_QUESTION", "MAX_ITEM_QUESTION"]),
  },
};
</script>
<style lang="scss" scoped>
.question-progress-bar {
  margin-bottom: 30px;
  width: 100%;
  height: 4px;
  background-color: #eaeef2;
  border-radius: 2px;
  position: relative;
  max-width: 440px;
  margin: 0 auto;
  &__item {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    border-radius: 2px;
    background-color: #68dffa;
  }
}
</style>
