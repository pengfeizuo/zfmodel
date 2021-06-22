<template>
  <div class="rqcode-box">
    <div class="recode-left" v-if="hover===true">
      <h1>扫码关注</h1>
      <div class="item-box" v-for="item in list" :key="item.id">
        <img :src="item.rqcode" alt />
        <h2>{{item.name}}</h2>
      </div>
    </div>
    <div v-if="hover===false"></div>
    <div class="recode-right" @mouseover="hover = true" @mouseleave="hover = false">
      <img v-if="hover===false" src="@/assets/image/code.png" alt />
      <img v-if="hover===true" src="@/assets/image/codeRed.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: false,
      list: [],
    };
  },

  created() {
    
  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
.rqcode-box {
//   min-width: 168px;
  position: fixed;
  right: 5vh;
  bottom: 30vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .recode-left {
    padding: 25px 16px 23px 16px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 12px;
    h1 {
      font-size: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 28px;
      text-align: center;
    }
    .item-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px 0 0 0;
      h2 {
        font-size: 13px;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 25px;
      }
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
  .recode-right {
    width: 44px;
    height: 44px;
    background: rgba(222, 222, 222, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>