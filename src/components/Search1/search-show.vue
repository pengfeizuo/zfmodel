<template>
    <div class="SearchShow">
      <div class="yi1">
    <span class="wu"><img src="@/assets/image/Shape.png" alt=""></span>
       <span class="er">关于<span class="san">“地方”</span>,共找到<span class="si">5</span>个相关</span>   
      </div>
      <!-- 搜索列表 -->
     <div class="liebiao">
<div v-for="(item) in tableData" :key="item.id" class="sousuo">
<span class="first">{{item.address}}</span>
<span class="second">{{item.date}}</span>
</div>
     </div>
    </div>
</template>
<script>
export default {
     name: "SearchShow",
    props: {
   SearchShow: {
      type: String,
      required: true
    }
  },
    data(){
        return{
          tableData: [{
            date: '2020-5-20',
          
            address: '中共'
          }, {
            date: '2020-5-20',
           
            address: '中央办公厅印发《公务员职务与职级并行规定》'
          }, {
            date: '2020-5-20',
            
            address: '《公务员职务与职级并行规定》'
          }, {
            date: '2020-5-20',
            
            address: '中共中央办公职级并行规定》'
          },
           {
            date: '2020-5-20',
            
            address: '并行规定》'
          },
          
          ]
        }
    },
    methods:{
  
    
    }
}
</script>
<style lang="less" scoped>
.el-icon-circle-check:before {
content: "\e720";
color: white;
background:#1677FF;
border-radius: 50%;
 float: left;   
}
.wu{
    width: 14px;
    height: 14px;
    margin-left: 16px;
}
.yi1{
width:920px;
height:40px;
background:rgba(254,248,248,1);
border-radius:4px;
border:1px solid rgba(221,33,38,1);;
line-height: 40px;
}
.er{
    margin-left: 15px;
}
.san{
    color:#DD2126;
}
.sousuo{
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #E8E8E8;
  line-height: 74px;
  box-sizing: border-box;
 
}
.second{
 position: absolute;
 right:40px;
 color: #999999;
}
</style>