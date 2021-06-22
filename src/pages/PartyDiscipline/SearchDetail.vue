<template>
    <div class="SX">
       <div class="container">
      <div class="title-tab">
        <span>当前位置：</span>
        <span @click="GoPartyDiscipline">党纪法规></span>
        <span @click="GoSearch">查询系统></span>
        <span class="red">正文</span>
      </div>
      <!-- 正文 -->
    <div class="zhengwen">
      <h1>{{msg.title}}</h1>
      <div class="first">
        <p ></p>
        <p></p>
        <p></p>
      </div>
       <div class="date">
         发布时间：{{msg.publishTime}}
       </div>
       <div class="xh"></div>
      <div class="second ql-container ql-snow">
        <p class="ql-editor" v-html="msg.content"></p>

       
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
this.Api.getSearch1({id:id}).then((res)=>{
  console.log(res);
  this.msg=res.data
 

})
  },
    methods: {
        GoPartyDiscipline() {
      this.$router.push("/PartyDiscipline");
    },
  GoSearch() {
      this.$router.push("/PartyDiscipline/Search");
    }
    },
}
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
    overflow-wrap: break-word;
}
 .second p {
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
.first p{
    font-weight: 600;
}
.date{
  color: #999999;
  font-size: 16px;
  text-align: center;
  margin-bottom: 28px;
}
/deep/img{
  object-fit: cover;
max-width: 1000px
 }
</style>