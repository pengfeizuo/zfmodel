<template>
  <div class='wrapper' v-if="isshow">
    <div class='loading'>
      <img src="@/assets/loading.gif" alt="" width="40" height="40">
      <p>拼命加载中...</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      duration: {
        type: String,
        default: '1200' // 默认1s
      }
    },
    data: function () {
      return {
        isshow: true
      }
    },
    mounted () {
      let self = this
      setTimeout(() => {
        self.isshow = false
      }, self.duration)
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .8);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 18px;
      color: #147bfd;
      letter-spacing: 2px;
    }
  }
</style>
