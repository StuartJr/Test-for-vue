<template>
  <div class="question-result">
    <div v-if="NUMBER > MAX_NUMBER_QUESTION" class="question-result__wrapper">
      <div v-if="LIST_ID != 2" class="question-result__container">
        <p class="question-result__title">Ваш результат:</p>
        <div
          v-for="(item, index) in LIST_SELECTED_QUESTIONS"
          class="question-result__list"
          :key="index"
        >
          <div class="question-result__list-item">
            {{ index + 1 }}. {{ item.text }}
          </div>
        </div>
      </div>
      <div v-if="LIST_ID == 2" class="question-result__container">
        <p class="question-result__title">
          (☞ﾟヮﾟ)☞ Ваш результат: 👌 ☜(ﾟヮﾟ☜)
        </p>
        <p class="question-result__title">╰(*°▽°*)╯</p>
        <iframe
          v-if="LIST_ID == 2"
          width="860"
          height="515"
          src="https://www.youtube.com/embed/rdi7G1hY4-w?controls=0?rel=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="question-result__btn">
        <router-link to="/" class="question-result__btn-item">
          Send result
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "QuestionResult",
  computed: {
    ...mapGetters([
      "LIST_ID",
      "NUMBER",
      "MAX_NUMBER_QUESTION",
      "LIST_SELECTED_QUESTIONS",
    ]),
  },
};
</script>
<style lang="scss" scoped>
.question-result {
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
    text-align: center;
    color: #162a41;
    margin-bottom: 32px;
  }
  &__list {
    margin-bottom: 20px;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__list-item {
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #162a41;
  }
  &__btn {
    padding-top: 40px;
  }
  &__btn-item {
    cursor: pointer;
    width: 100%;
    max-width: 180px;
    padding: 12px 16px;
    background-color: #68dffa;
    border-radius: 4px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
    color: #162a41;
    margin-bottom: 32px;
  }
}
</style>
