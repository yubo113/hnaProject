<template>
  <div class="indexView">
    <div class="index-indicator" v-show="indicatorShow" @touchmove.stop.prevent>
      <div class="mint-indicator-wrapper">
        <spinner class="mint-indicator-spin" :type="1" :size="45"></spinner>
        <span class="mint-indicator-text">加载中...</span>
      </div>
    </div>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import { Spinner } from 'mint-ui';
export default {
  components: { spinner: Spinner },
  computed: {
    indicatorShow: function () {
      return this.$store.state.loading.loadingShow;
    }
  }
};
//   data() {
//     return {
//       transitionName:''
//     }
//   },
//   watch: {
//   '$route' (to, from) {
//     const toDepth = to.path.split('/').length
//     const fromDepth = from.path.split('/').length
//     this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
//   }
// }
// }
// .slide-left-enter-active, .slide-left-leave-active {
//         transition: transform .5s;
//        /* transform-origin: left;*/
//     }
//     .slide-left-enter{
//       transform: translateX(-100%);
//     }
//     .slide-left-leave{
//         transform: translateX(0);
//     }
//     .slide-left-enter-active{
//        transform: translateX(0);
//     }
//     .slide-left-leave-active {
//          transform: translateX(100%);
//     }
</script>

<style lang="scss">
  @import "./style/style";
  @import "./style/icons/css/font-awesome.css"
</style>
