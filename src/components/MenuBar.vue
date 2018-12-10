<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
        <div class="icon-wrapper">
          <img src="@/image/menu.png" class="icon">
        </div>

        <div class="icon-wrapper">
          <img src="@/image/progress.png" class="icon">
        </div>
        <div class="icon-wrapper">
          <img src="@/image/sun.png" class="icon">
        </div>
        <div class="icon-wrapper">
          <img src="@/image/A.png" class="icon" @click="showSetting">
        </div>
      </div>

    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-size">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ifSettingShow: false
    }
  },
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showSetting() {
      this.ifSettingShow = true
    },

    hideSetting() {
      this.ifSettingShow = false
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/styles/global.scss';
.menu-bar {
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: px2rem(48);
    z-index: 101;
    display: flex;
    background: #fff;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .icon-wrapper {
      flex: 1;
      @include center;
    }
  }
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(48);
    left: 0;
    width: 100%;
    height: px2rem(60);
    background: #fff;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .setting-size {
    }
  }
}
</style>