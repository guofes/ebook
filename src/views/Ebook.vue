<template>
  <div class="ebook">
    <TitleBar :ifTitleAndMenuShow="ifTitleAndMenuShow"></TitleBar>
    <div class="read-wrapper">
      <div id="read">

      </div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <MenuBar :ifTitleAndMenuShow="ifTitleAndMenuShow" ref="menuBar"></MenuBar>
  </div>
</template>

<script>
import Epub from 'epubjs'
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
const DOWNLOAD_URL = '111.epub'

global.ePub = Epub
export default {
  components: {
    TitleBar,
    MenuBar
  },
  data() {
    return {
      ifTitleAndMenuShow: false
    }
  },
  methods: {
    //电子书的解析和渲染
    showEpub() {
      //生成Ebook
      this.book = new Epub(DOWNLOAD_URL)
      console.log(this.book)
      //生成Rendition
      this.redition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      //通过Rendition.display渲染电子书
      this.redition.display()
    },
    prevPage() {
      if (this.redition) {
        this.redition.prev()
      }
    },
    nextPage() {
      if (this.redition) {
        this.redition.next()
      }
    },
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    }
  },
  mounted() {
    this.showEpub()
  }
}
</script>

<style lang='scss' scoped>
@import '@/styles/global.scss';
.ebook {
  position: relative;
  .read-wrapper {
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex;
      .left {
        flex: 0 0 px2rem(100);
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
}
</style>