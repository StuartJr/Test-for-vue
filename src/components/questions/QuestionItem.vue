<template>
  <div class="question-item">
    <div
      class="question-item__content"
      v-for="item in LIST_QUESTIONS[LIST_ID].quest"
      :key="item.id"
    >
      <div class="question-item__content-wrapper" v-show="item.id == NUMBER">
        <QuestionCount :item="item" />
        <p class="question-item__title">{{ item.namequestion }}</p>
        <div
          class="question-item__list"
          v-show="item.id == NUMBER"
          v-for="(question, index) in item.questions"
          :key="index"
          @click="selectItem(question)"
        >
          <p class="question-item__list-item">{{ question.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuestionCount from "@/components/questions/QuestionCount.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "QuestionItem",
  components: {
    QuestionCount,
  },
  methods: {
    ...mapActions(["CHANGE_ITEM_MINUS_ACTIONS", "CHANGE_NUMBER_PLUS_ACTIONS"]),
    selectItem(data) {
      const allLists = document.querySelectorAll(".question-item__list");
      for (let list of allLists) {
        if (list.style.display != "none") {
          list.classList.remove("active");
        }
      }
      this.CHANGE_NUMBER_PLUS_ACTIONS();
      this.CHANGE_ITEM_MINUS_ACTIONS();
      this.LIST_SELECTED_QUESTIONS.push(data);

      const target = this.LIST_SELECTED_QUESTIONS;
      const getCountIds = (target) => {
        const result = new Object();

        target.forEach((item) =>
          result[item.cat] ? result[item.cat]++ : (result[item.cat] = 1)
        );

        return Object.keys(result).map((item) => {
          return {
            sum: result[item],
          };
        });
      };

      for (let i = 0; i < getCountIds(target).length; i++) {
        if (getCountIds(target)[i].sum > 1) {
          let searchName = data.cat;
          let index = this.LIST_SELECTED_QUESTIONS.map((el) => el.cat).indexOf(
            searchName
          );
          this.LIST_SELECTED_QUESTIONS.splice(index, 1);
        }
      }
    },
  },
  computed: {
    ...mapGetters([
      "LIST_ID",
      "NUMBER",
      "LIST_QUESTIONS",
      "LIST_SELECTED_QUESTIONS",
    ]),
  },
  mounted() {
    this.$nextTick(function () {
      const allLists = document.querySelectorAll(".question-item__list");
      for (let list of allLists) {
        list.addEventListener("click", () => {
          list.classList.add("active");
        });
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.question-item {
  max-width: 440px;
  margin: 0 auto;
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
    text-align: center;
    color: #162a41;
    margin-bottom: 32px;
  }
  &__list {
    margin-top: 16px;
    cursor: pointer;
    background-color: #eaeef2;
    border-radius: 6px;
    text-align: left;
    padding: 28px 0 28px 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #162a41;
    position: relative;
    &.active {
      padding: 26px 0px 26px 30px;
      border: 2px solid #68dffa;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 20px;
        width: 30px;
        height: 30px;
        background-color: #68dffa;
        border-radius: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
