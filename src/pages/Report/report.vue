<template>
  <div class="all-style-bgc">
    <div class="Risk">
      <!-- 当前位置 -->
      <div class="box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <span class="dangqian">当前位置：</span>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <div class="red">政务信息</div>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 布局容器 -->
      <div class="container">
        <!-- 左侧 -->
        <div class="left">
          <div class="top">
            <i class="iconfont iconbianzu10beifen3"></i>
            <p>政务信息</p>
          </div>

          <div
            class="smallBox"
            v-for="(item) in tabList"
            :key="item.id"
            :class="{'isActive':item.id==activeId}"
            @click="handle(item.id)"
          >{{item.job}}</div>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeId: 1,
      tabPosition: "left",
      tabList: [
        { id: 1, job: "网上举报" },
        { id: 2, job: "二维码举报" },
        { id: 3, job: "调查评估" },
      ],
    };
  },
  methods: {
    handle(id) {
      if (id == 1) {
        this.activeId = 1;
        this.$router.push({ name: "reportInternet" });
      } else if (id == 2) {
        this.activeId = 2;
        this.$router.push({ name: "reportQr" });
      } else if (id == 3) {
        this.activeId = 3;
        this.$router.push({ name: "reportEvaluation" });
      }
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-tabs__nav-wrap::after {
  content: "";
  height: 1px !important;
  background-color: #e4e7ed !important;
  z-index: 1;
}
/deep/ .el-tabs__item {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  padding: 0;
  margin: 0 20px;
}
/deep/ .is-active {
  color: red;
  border-bottom: 2px solid #dd2126;
}
/deep/ .el-tabs__active-bar {
  display: none;
}
.Risk {
  background: #f2f2f2;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
}
.container {
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  margin-top: 20px;
}
.box {
  width: 100%;
}
/deep/ .el-breadcrumb {
  font-size: 12px;
  color: rgba(102, 102, 102, 1);
  line-height: 12px;
  float: left;
}
.dangqian {
  float: left;
}
/deep/.el-breadcrumb__inner {
  font-weight: 400 !important;
}
.red {
  color: #dd2126;
}

.isActive {
  background: #fce9ea;
}
.left {
  width: 180px;
  height: 267px;
  background-color: white;
}
.smallBox {
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 52px;
  text-align: center;
}
.top {
  margin-top: 24px;
  position: relative;
  width: 180px;
  height: 52px;
  line-height: 52px;

  background-color: #dd2126;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  i {
    left: 10px;
  }
}
p {
  padding-left: 40px;
  color: white;
}
.right {
  margin-left: 20px;
  width: 1000px;
  min-height: 546px;
  /*background-color: white;*/
  box-sizing: border-box;
}
i {
  position: absolute;
  left: 15px;
  width: 16px;
  height: 16px;
  color: white;
}
/deep/.el-breadcrumb {
  margin: 15px 0 20px 0;
  display: flex;
  align-items: center;
  line-height: 10px;
}
</style>