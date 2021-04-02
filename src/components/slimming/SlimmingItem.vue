<template>
  <a
    href="/question"
    class="slimming-item"
    v-show="isShowItem"
    @click="selected(indexlist)"
  >
    <div class="slimming-item__wrapper">
      <div class="slimming-item__img">
        <img
          :src="require('../../assets/' + imgitem)"
          alt="img"
          class="slimming-item__img-item"
        />
      </div>
      <div class="slimming-item__title">
        <p class="slimming-item__title-text">{{ title }}</p>
      </div>
    </div>
  </a>
</template>
<script type="text/javascript">
export default {
  name: "SlimmingItem",
  props: {
    title: String,
    imgitem: String,
    indexlist: String,
    isShow: String,
  },
  data() {
    return {
      isShowItem: 0,
    };
  },
  methods: {
    selected(item) {
      localStorage.counter = item;
    },
  },
  mounted() {
    if (this.isShow == "false") {
      this.isShowItem = 0;
    } else {
      this.isShowItem = 1;
    }
  },
};
</script>
<style lang="scss" scoped>
.slimming-item {
  padding-left: 14px;
  padding-right: 15px;
  &__wrapper {
    border: 2px solid #50c9f5;
    border-radius: 6px;
    cursor: pointer;
  }
  &__img {
    background-color: rgb(50, 55, 71);
    height: 235px;
    width: 180px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &__img-item {
    height: 260px;
    transform: translateY(-25px);
  }
  &__title {
    padding: 8px 6px;
    background-color: #50c9f5;
  }
  &__title-text {
    max-width: 160px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #ffffff;
  }
  &__title-name {
    max-width: 160px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    color: #000000;
  }
  &__container {
    display: none;
    position: absolute;
    top: 100px;
    left: 50%;
    width: 100%;
    z-index: 5;
    transform: translateX(-50%);
    background-color: #ffffff;
  }
}
</style>
