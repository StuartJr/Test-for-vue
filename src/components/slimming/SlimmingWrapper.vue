<template>
  <div class="slimming-wrapper">
    <div class="slimming-wrapper__wrapper">
      <div class="slimming-wrapper__title">
        <span>1-минутная</span>
        викторина
        <div class="slimming-wrapper__container">
          <SlimmingItem
            title="Возраст: 18-24 года"
            imgitem="img-1.png"
            indexlist="0"
            isShow="true"
          />
          <SlimmingItem
            title="Возраст: 25-34 года"
            imgitem="img-2.png"
            indexlist="1"
            isShow="true"
          />
          <SlimmingItem
            title="Возраст: 35-44 года"
            imgitem="img-3.png"
            indexlist="2"
            isShow="true"
          />
          <SlimmingItem
            title="Возраст: 45+"
            imgitem="img-4.png"
            indexlist="3"
            isShow="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SlimmingItem from "@/components/slimming/SlimmingItem.vue";

export default {
  name: "SlimmingWrapper",
  components: {
    SlimmingItem,
  },
};
</script>
<style lang="scss" scoped>
.slimming-wrapper {
  &__title {
    margin-bottom: 24px;
    display: block;
    color: #4e657f;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;

    span {
      font-weight: 700;
    }
  }
  &__container {
    padding: 60px 0px;
    display: flex;
    justify-content: center;
    max-width: 840px;
    margin: 0 auto;
  }
}
</style>
