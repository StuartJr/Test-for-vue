<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__des">
        <p class="footer__des-title">
          2021 © Все Права Защищены. Продолжая, вы соглашаетесь с нашими
        </p>
      </div>
      <div class="footer__links">
        <div
          class="footer__links-item"
          v-for="(item, index) in list"
          :key="index"
        >
          <a :href="item.link" class="footer__links-link">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigationFooter from "@/components/navigation/listFooter.js";

export default {
  name: "Footer",
  data() {
    return {
      list: navigationFooter,
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  &__wrapper {
    text-align: center;
    margin: 24px auto;
    color: #869aaf;
  }
  &__des-title {
    font-size: 10px;
    line-height: 1.6em;
  }
  &__links {
    display: flex;
    justify-content: center;
  }
  &__links-link {
    font-size: 10px;
    line-height: 1.6em;
    color: #869aaf;
    text-decoration: underline;
  }
  &__links-item {
    margin-right: 10px;
    position: relative;
    &:after {
      content: "|";
      position: absolute;
      right: -7px;
    }
    &:last-child {
      &:after {
        content: none;
      }
    }
  }
}
</style>
