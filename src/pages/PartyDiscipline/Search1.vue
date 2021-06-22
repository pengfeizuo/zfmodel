<template>
  <div class="Search">
    <!-- 搜索 -->
    <div class="box1">
      <div class="searchBox">
        <input
          type="text"
          v-model="searchText"
          placeholder="请输入关键词进行搜索"
          class="searchInput"
         ref="input"
          style="padding-left: 10px;"
        
        />

        <input type="button" @click="handle" value="搜索" class="searchButton" />
      </div>
    </div>
    <!-- 搜索内容展示 -->
    <div class="SearchShow" v-if="list.length" >
      <div class="yi">
        <span class="wu">
          <img src="@/assets/image/Shape.png" alt />
        </span>
        <span class="er">
          关于
          <span class="san">{{searchText}}</span>,共找到
          <span class="si">{{this.total}}</span>个相关
        </span>
      </div>
      <!-- 搜索列表 -->
      <div class="liebiao">
        <div v-for="(item,index) in list" :key="index" class="sousuo"  @click="goDetail(item.id)">
          <!-- 高亮 -->
          <!-- <div slot="title" v-html="highlight(item)"></div> -->
          <span class="first" slot="title" v-html="highlight(item)">{{item.title}}</span>
          <span class="second">{{item.date}}</span>
        </div>
        <div class="fenye">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="params.pageNum"
            background
            :page-sizes="[2, 5,10]"
            :page-size="params.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchData: [],
      newArray: [],
      isResultShow: false, // 控制搜索结果的展示
      searchText: "",
      //  参数
      params: {
        pageNum: 1,
        pageSize: 10,
      },

      // 总条数
      total: 0,
      list: [],
    };
  },
  created() {
     let searchText=this.$route.query.searchText
      this.searchText=searchText
     
  },
  watch:{
searchText(val){
if(val.trim()==''){
  this.list=[]
this.total=0
}
},

  },
  mounted(){
this.$refs['input'].focus()
  },
  methods: {
    // 列表

    get() {
     
      if (this.searchText.trim() == "") {
        this.$message.error("请输入搜索内容");
        return;
      }
     
      this.Api.getSearch({ ...this.params, title: this.searchText }).then(
        (res) => {
          if (res.code == 0) {
            this.list = res.data.records;
            this.total = res.data.total;
            if(this.total==0){
              this.$message.error('抱歉，没有搜到相关内容')
            }
          }
        }
      );
    },
    // 搜索
    handle() {
      this.get();
    },
   
    // 设置搜索建议中出现的搜索内容高亮
    highlight(item) {
     
      // 根据搜索框中的内容，匹配
      let reg = new RegExp(this.searchText, "ig");
      // 根据匹配的内容，替换结果
      let highlightStr = `<span class="active">${this.searchText}</span>`;
      // 返回匹配替换后的内容

      return item.title.replace(reg, highlightStr);
    },
    // 分页
    //数据条数发生变化
    handleSizeChange(newSize) {
      this.params.pageSize = newSize;
      this.get();
    },
    //翻页触发
    handleCurrentChange(currPage) {
      this.params.pageNum = currPage;
      this.get();
    },
    // 跳转详情
     // 跳转详情
    goDetail(id) {
      console.log('跳转前',id);
       this.$router.push({name:"SearchDetail",query:{id:id}})
       
    },
  },
};
</script>
<style lang="less" scoped>
.first{
  width: 700px;
 overflow: hidden; 
 text-overflow:ellipsis; 
 white-space: nowrap;
  color: #333333;
  font-size: 16px;
}
.box1 {
  margin-left: -180px;
  height: 50px;
  width: 100%;
}
.searchBox {
  margin: 0 auto;
  width: 60%;
  position: relative;
}
.searchInput {
  display: inline-block;
  width: 85%;
  height: 38px;
  border: 1px solid #d0d0d0;
  float: left;
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-right: none;
}
.searchButton {
  display: inline-block;
  width: 15%;
  height: 38px;
  line-height: 40px;
  float: left;
  outline: none;
  background-color: #dd2126;
  font-size: 16px;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  color: #fff;
}
.yi2 {
  width: 421px;
  height: 363px;
  margin: 0 auto;
  border: 1px dashed #888888;
  margin-top: 90px;
}
.el-icon-circle-check:before {
  content: "\e720";
  color: white;
  background: #1677ff;
  border-radius: 50%;
  float: left;
}
.wu {
  width: 14px;
  height: 14px;
  margin-left: 16px;
}
.yi {
  width: 920px;
  height: 40px;
  background: rgba(254, 248, 248, 1);
  border-radius: 4px;
  border: 1px solid rgba(221, 33, 38, 1);
  line-height: 40px;
}
.er {
  margin-left: 15px;
}
.san {
  color: #dd2126;
}
.sousuo {
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #e8e8e8;
  line-height: 74px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.second {
  color: #999999;
}
/deep/ span.active {
  color: red;
}
.sousuo span:hover {
  cursor: pointer;
}
.fenye {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>