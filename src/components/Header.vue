<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link to="/">
          <img class="header__logo" src="@/assets/logosite.png" alt="logo" />
        </router-link>
        <div @click="toggleBurger()" class="header__burger">
          <span class="header__burger-span"></span>
        </div>
      </div>
    </div>
    <headerBurger />
  </div>
</template>
<script>
import HeaderBurger from "@/components/HeaderBurger.vue";
export default {
  name: "Header",
  components: {
    HeaderBurger,
  },
  methods: {
    toggleBurger() {
      const background = document.getElementById("background");
      background.classList.add("active");

      const headerBurgerWrapper = document.getElementById(
        "headerBurgerWrapper"
      );
      headerBurgerWrapper.classList.add("active");
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 10;
  height: 48px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);

  &__wrapper {
    width: 100%;
    position: relative;
  }

  &__logo {
    width: 63px;
    height: 28px;
  }

  &__burger {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 18px;
    width: 20px;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 2px;
      width: 20px;
      background-color: #000000;
      border-radius: 4px;
      transition: all 0.3s ease 0s;
    }

    &:after {
      content: "";
      position: absolute;
      top: 16px;
      right: 0;
      height: 2px;
      width: 20px;
      background-color: #000000;
      border-radius: 4px;
      transition: all 0.3s ease 0s;
    }

    span {
      position: absolute;
      top: 8px;
      right: 0;
      height: 2px;
      width: 20px;
      background-color: #000000;
      border-radius: 4px;
      opacity: 1;
      transition: all 0.3s ease 0s;
    }
  }
}
</style>
