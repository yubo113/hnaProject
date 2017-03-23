<template>
  <div class="indexView">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
export default {
  components: {}
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
