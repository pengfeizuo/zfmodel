<template>
  <div class="SX">
    <div class="container">
      <div class="title-tab">
        <span>当前位置：</span>
        <span @click="GoRisk">首页></span>
        <span @click="GoSiXiang">公开信息></span>
        <span @click="GoJT">集团动态></span>
        <span class="red">正文</span>
      </div>
      <!-- 正文 -->
      <div class="zhengwen">
        <h1>{{msg.title}}</h1>
        <div class="first">
        <span class="third">{{msg.source}}</span>
         <!-- <span class="si">|</span> -->
        <span>发布时间：{{msg.publishTime}}</span>
      </div>
       <div class="xh"></div>
        <div class="ql-container ql-snow">
          <p class="ql-editor" v-html="msg.context"></p>

        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
msg:[]
        }
    },
  created(){
let id = this.$route.query.id
console.log('跳转后',id);
this.Api.getGroup2({id:id}).then((res)=>{
  console.log(res);
  this.msg=res.data
 

})
  },   
  methods: {
    GoRisk() {
      this.$router.push("/HOME");
    },
    GoSiXiang() {
      this.$router.push("/MakeInspectionTour");
    },
   GoJT() {
      this.$router.push("/MakeInspectionTour/JiTuan");
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.title-tab {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 54px;
  cursor: pointer;
}
.red {
  color: red;
}
.zhengwen {
  width: 1200px;
  background-color: white;
  padding: 60px;
  box-sizing: border-box;
  
}
p {
  text-indent: 2em;
  font-size: 16px;
  color: #333333;
  margin-top: 20px;
}

h1 {
  text-align: center;
  font-size: 28px;
  color: #333333;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
.first {
  text-align: center;
  font-size: 16px;
  color: #999999;
  margin-top: 28px;
  margin-bottom: 30px;
}
.daohang {
  margin: 20px 0;
}
.si{
   margin: 0 16px;
 }
 /deep/img{
  object-fit: cover;
max-width: 1000px
 }
 
</style>