<template>
  <div class="header-burger">
    <div class="header-burger__background" id="background"></div>
    <div class="header-burger__wrapper" id="headerBurgerWrapper">
      <div @click="closeBurger()" class="header-burger__close"></div>
      <div class="header-burger__list-wrap">
        <ul class="header-burger__list">
          <li
            class="header-burger__list-item"
            v-for="(item, index) in list"
            :key="index"
          >
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import navigationHeader from "@/components/navigation/listHeader.js";

export default {
  name: "HeaderBurger",
  data() {
    return {
      list: navigationHeader,
    };
  },
  methods: {
    closeBurger() {
      const background = document.getElementById("background");
      background.classList.remove("active");

      const headerBurgerWrapper = document.getElementById(
        "headerBurgerWrapper"
      );
      headerBurgerWrapper.classList.remove("active");
    },
  },
};
</script>
<style lang="scss" scoped>
.header-burger {
  &__background {
    position: fixed;
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease 0s;
    z-index: 2;
    &.active {
      left: 0;
    }
  }
  &__wrapper {
    position: fixed;
    right: 0;
    top: -100%;
    width: 30%;
    height: 100%;
    background: #ffffff;
    transition: all 0.3s ease 0s;
    z-index: 3;
    &.active {
      top: 0;
    }
  }
  &__close {
    height: 18px;
    width: 18px;
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
    &:before {
      content: "";
      height: 2px;
      width: 18px;
      background-color: #000000;
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 7px;
      transform: rotate(45deg);
    }
    &:after {
      content: "";
      height: 2px;
      width: 18px;
      background-color: #000000;
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 7px;
      transform: rotate(-45deg);
    }
  }
  &__list {
    padding-top: 100px;
    padding-left: 50px;
    padding-right: 50px;
  }
  &__list-item {
    text-align: left;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    & a {
      font-size: 24px;
      line-height: 32px;
      color: #000;
    }
  }
}
</style>
