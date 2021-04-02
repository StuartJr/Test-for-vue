<template>
  <div class="home">
    <div v-if="isLoadingPage" class="home__loading">
      <span></span>
    </div>
    <Header v-if="!isLoadingPage" />
    <Slimming />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Slimming from "@/components/slimming/Slimming.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Slimming,
    Footer,
  },
  data() {
    return {
      isLoadingPage: true,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.isLoadingPage = false;
    });
  },
};
</script>
<style lang="scss">
.home {
  &__loading {
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #ffffff;
    span {
      animation: change-background 2s linear infinite alternate;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #68dffa;
      transform: translate(-50%, -50%);
      @keyframes change-background {
        0% {
          height: 50px;
          width: 50px;
        }
        25% {
          height: 40px;
          width: 40px;
        }
        50% {
          height: 30px;
          width: 30px;
        }
        75% {
          height: 50px;
          width: 50px;
        }
        100% {
          height: 70px;
          width: 70px;
        }
      }
    }
  }
}
</style>
