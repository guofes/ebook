<template>
  <div class="title-bar">
    <transition name="slide-down">
      <div class="title-wrapper" v-show="ifTitleAndMenuShow">
        <div class="left">
          <img src="@/image/back.png" class="icon">
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <img src="@/image/buycard.png" class="icon">
          </div>
          <div class="icon-wrapper">
            <img src="@/image/user.png" class="icon">
          </div>
          <div class="icon-wrapper">
            <img src="@/image/dian.png" class="icon">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/styles/global.scss';
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: px2rem(48);
  z-index: 101;
  display: flex;
  background: #fff;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
    }
  }
}
</style>