<template>
  <div class="Risk">
    <!-- 当前位置 -->
    <div class="box">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <span class="dangqian">当前位置：</span>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <div class="red">公开信息</div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 布局容器 -->
    <div class="container">
      <!-- 左侧 -->
      <div class="left">
        <div class="top">
          <i class="iconfont iconbianzu10beifen3"></i>
          <p class="yi">公开信息</p>
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
</template>
<script>
export default {
  data() {
    return {
      activeId: 1,
      tabPosition: "left",
      tabList: [
        { id: 1, job: "国家动态" },
        { id: 2, job: "省级动态" },
        { id: 3, job: "市级动态" },
      ],
    };
  },
  methods: {
    handle(id) {
      if (id == 1) {
        this.activeId = 1;
        this.$router.push({ name: "ZhongYang" });
      } else if (id == 2) {
        this.activeId = 2;
        this.$router.push({ name: "BeiJing" });
      } else if (id == 3) {
        this.activeId = 3;
        this.$router.push({ name: "JiTuan" });
      }
    },
  },
  mounted() {
    let router_path = this.$route.path;

    if (router_path === "/MakeInspectionTour/BeiJing") {
      this.activeId = 2;
    } else if (router_path === "/MakeInspectionTour/JiTuan") {
      this.activeId = 3;
    } else {
      this.activeId = 1;
    }
  },
};
</script>
<style lang="less" scoped>
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
  margin-top: 15px;
  width: 100%;
  height: 12px;
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
  width: 180px;
  height: 52px;
  line-height: 52px;
  background-color: #dd2126;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
}
.yi {
  margin-left: 10px;
  font-size: 16px;
  line-height: 50px;
  color: white;
}
.right {
  margin-left: 20px;
  width: 1000px;
  min-height: 712px;
  background-color: white;
  padding: 41px 40px;
  box-sizing: border-box;
}
i {
  margin-left: 10px;
  width: 18px;
  height: 18px;
  color: white;
}
/deep/.router-link-active {
  display: block;
  width: 134px;
  background: #dd2126;
}
</style>