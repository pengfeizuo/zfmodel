<template>
<div>

    <div class="jdjb-box">
        <img :src="PicJdjb" alt class="pic-2" />
    </div>

   
</div>
</template>

<script>
export default {
    data() {
        return {
            PicQrReport: "",
            PicQrgt: require("../../assets/image/箭头.png"),
            PicJdjb: require("../../assets/image/jdjb.png"),
            PICsPACE: sessionStorage.getItem("picSpace"),
        };
    },
    //图片根地址
    computed: {
        baseUrl() {
            return this.$store.state.fileIp;
        },
    },
    created() {
    },
};
</script>

<style scoped>
.jdjb-box {
    position: relative;
    min-height: 258px;
    background: #f2f2f2;
}

.pic-internet-report {
    width: 920px;
    height: 460px;
}

.pic-2 {
    width: 978px;
    height: 258px;
    position: absolute;
    top: 0px;
    left: 15px;
}

.pic-box {
    min-width: 920px;
    min-height: 460px;
    background: white;
    padding: 41px 40px;
    margin-bottom: 48px;
}

/*
.pic-gt {
  width: 26px;
  height: 44px;
  position: absolute;
  left: 247px;
  top: 50%;
  transform: translate(0, -50%);
}
.report-h1 {
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
}
.Link-1 {
  display: flex;
  justify-content: space-between;
  padding-bottom: 86px;
  background: rgba(242, 242, 242, 1);
}
.Link-2 {
  display: flex;
  justify-content: space-between;
  background: rgba(242, 242, 242, 1);
}
.Link-item {
  width: 400px;
  position: relative;
}
.Item-ev {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98px;
}*/
</style>
