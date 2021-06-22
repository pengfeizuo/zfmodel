<template>
  <div class="topbar">
    <!--顶部悬浮条-->
    <div class="biaoti-top">
      <div class="biaoti">
        <div class="a" @click="GoHome">欢迎访问南都市政府门户网站vue制作模板</div>
        <div class="b">
         你是第23432位访客
        </div> 
      </div>
    </div>
  
    <div class="block BackgroundPic">
      <el-carousel trigger="click" height="455px" style="overflow:hidden !important;" arrow="never">
        <el-carousel-item v-for="item in imgList" :key="item.id">
         <div
            class="background-color"
            :style="{backgroundImage:'url(' + baseUrl+item.picUrl+ ')', 
        backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition:'center'}"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--路由导航-->
       <ul class="top">
         <li class="item">
           <router-link to="/Abstractted">首页</router-link>
         </li>
         <li class="item">
           <router-link to="/report">政务信息</router-link>
         </li>
         <li class="item">
           <router-link to="/forum">办事大厅</router-link>
         </li>
         <li class="item">
           <router-link to="/Risk">新闻动态</router-link>
         </li>
         <li class="item">
           <router-link to="/PartyDiscipline">政策法规</router-link>
         </li>
         <li class="item">
           <router-link to="/MakeInspectionTour">公开信息</router-link>
         </li>
         <li class="item">
           <router-link to="/Investigate">应急管理</router-link>
         </li>
         <li class="item">
           <router-link to="/archives">组织机构</router-link>
         </li>
       </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LogoPic: require("@/assets/image/logo.png"),
      //  参数1
      params: {
        picCode: "BGPIC",
      },
      //轮播列表
      imgList: [
		  {id:213,picUrl:'/nodelimg/2/1.jpg'},
		  {id:223,picUrl:'/nodelimg/2/2.jpg'},
		  ],
      PICsPACE: localStorage.getItem("picSpace"),
    };
  },
  methods: {
   OpenLogo() {
      document.getElementsByTagName("body")[0].className = "loaded";
    },
    GoHome() {
      this.$router.push({
        name: "home",
      });
    },
   },
  computed: {
    baseUrl() {
      return "https://www.hyxdsoft.com/";
    },
  },

};
</script>

<style lang="less" scoped>
.BackgroundPic {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}

//banner图的修改
.img-banner {
  // width: 100%;
  // height: 100%;
  object-fit: cover;
}

/deep/ .router-link-active {
  display: block;
  width: 150px;
  background: #dd2126 !important;
}

.topbar {
  width: 100%;
  height: 455px;
  /*background: url(../../assets/image/头部背景.png) no-repeat;*/
  display: flex;
  align-items: flex-end;
  position: relative;
}

a {
  display: inline-block;
  color: white;
  width: 100%;
}

/*.router-link-active{
  background-color: #dd2126;
}*/
.item {
  width: 150px;
  font-size: 22px;
  /*padding: 0 20px;*/
  /*background:rgba(0,0,0,0.7);*/
  cursor: pointer;
  text-align: center;
  line-height: 48px;
  color: white;
}

.item:hover {
  background-color: #dd2126;
}

.top {
  width: 1200px;
  display: flex;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.biaoti {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.biaoti-top {
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(242, 242, 242, 0.7) !important;
  border-radius: 3px;
  z-index: 1000;
}

.a,
.b {
  height: 40px;
  font-size: 18px;
  color: rgba(62, 62, 62, 1.0);
  font-weight: bold;
  line-height: 30px;
  padding: 8px 0;
  cursor: pointer;
}

.b a {
  height: 20px;
  font-size: 14px;
  color: rgba(102, 102, 102, 1);
  line-height: 20px;
  padding: 0px 0;
  cursor: pointer;
}

.b a:hover {
  color: red;
}

.a:hover {
  color: red;
}

.background-color {
  height: 457px;
}
</style>
