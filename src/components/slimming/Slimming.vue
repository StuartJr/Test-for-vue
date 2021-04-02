<template>
  <div class="slimming">
    <div class="slimming__wrapper">
      <p class="slimming__title">похудеть и нарастить мышечную массу</p>
      <p class="slimming__des">в зависимости от <b>вашего возраста</b></p>
      <SlimmingWrapper />
    </div>
  </div>
</template>
<script>
import SlimmingWrapper from "@/components/slimming/SlimmingWrapper.vue";

export default {
  name: "Slimming",
  components: {
    SlimmingWrapper,
  },
};
</script>
<style lang="scss" scoped>
.slimming {
  &__wrapper {
    padding-top: 88px;
  }
  &__title {
    font-size: 32px;
    line-height: 1;
    margin-bottom: 8px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__des {
    color: rgb(144, 183, 255);
    font-size: 18px;
    text-transform: uppercase;
    padding-bottom: 66px;
  }
}
</style>
