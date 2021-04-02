<template>
  <div class="question-count">
    <img
      v-show="NUMBER > 1"
      src="@/assets/arrow.svg"
      alt="arrow"
      class="question-count__img"
      @click="backButton()"
    />
    <p class="question-count__text">
      {{ item.id }}/<span>{{ MAX_NUMBER_QUESTION }}</span>
    </p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "QuestionCount",
  props: {
    item: Object,
  },
  methods: {
    ...mapActions(["CHANGE_ITEM_PLUS_ACTIONS", "CHANGE_NUMBER_MINUS_ACTIONS"]),
    backButton() {
      if (this.NUMBER > 1) {
        this.CHANGE_NUMBER_MINUS_ACTIONS();
        this.CHANGE_ITEM_PLUS_ACTIONS();
      }
    },
  },
  computed: {
    ...mapGetters(["NUMBER", "MAX_NUMBER_QUESTION"]),
  },
};
</script>
<style lang="scss" scoped>
.question-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  max-width: 440px;
  margin: 0 auto;

  &__img {
    height: 20px;
    cursor: pointer;
  }

  &__text {
    font-weight: 600;
    font-size: 18px;
    color: #68dffa;
    text-align: right;
    width: 100%;
    span {
      color: #162a41;
    }
  }
}
</style>
