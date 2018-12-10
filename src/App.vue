<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'APp'
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss">
@import '@/styles/global.scss';
.icon {
  width: px2rem(24);
}
</style>
