import Vue from "vue";
import Vuex from "vuex";
import QuestionsList from "@/components/questions/list/Questions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listID: localStorage.counter,
    listQuestions: QuestionsList,
    number: 1,
    maxNumberQuestion: 0,
    maxItemQuestions: 0,
    selectedQuestionsList: [],
  },
  mutations: {
    SEARCH_MAX_NUMBER_QUESTION: (state) => {
      state.maxNumberQuestion = state.listQuestions[state.listID].quest.length;
      state.maxItemQuestions = state.maxNumberQuestion - 1;
    },
    CHANGE_ITEM_PLUS: (state) => {
      state.maxItemQuestions++;
    },
    CHANGE_ITEM_MINUS: (state) => {
      state.maxItemQuestions--;
    },
    CHANGE_NUMBER_PLUS: (state) => {
      state.number++;
    },
    CHANGE_NUMBER_MINUS: (state) => {
      state.number--;
    },
  },
  actions: {
    CHANGE_ITEM_PLUS_ACTIONS({ commit }) {
      commit("CHANGE_ITEM_PLUS");
    },
    CHANGE_ITEM_MINUS_ACTIONS({ commit }) {
      commit("CHANGE_ITEM_MINUS");
    },
    CHANGE_NUMBER_PLUS_ACTIONS({ commit }) {
      commit("CHANGE_NUMBER_PLUS");
    },
    CHANGE_NUMBER_MINUS_ACTIONS({ commit }) {
      commit("CHANGE_NUMBER_MINUS");
    },
    SEARCH_MAX_NUMBER_ACTIONS({ commit }) {
      commit("SEARCH_MAX_NUMBER_QUESTION");
    },
  },
  getters: {
    LIST_ID(state) {
      return state.listID;
    },
    LIST_QUESTIONS(state) {
      return state.listQuestions;
    },
    LIST_SELECTED_QUESTIONS(state) {
      return state.selectedQuestionsList;
    },
    NUMBER(state) {
      return state.number;
    },
    MAX_NUMBER_QUESTION(state) {
      return state.maxNumberQuestion;
    },
    MAX_ITEM_QUESTION(state) {
      return state.maxItemQuestions;
    },
  },
});
