<template>
  <div class="Search">
    <!-- 搜索 -->
    <div class="box">
      <div class="searchBox">
        <input
          type="text"
          v-model="searchText"
          placeholder="请输入关键词进行搜索"
          @focus="handleHover"
          @blur="handleBlur"
          class="searchInput"
          style="padding-left: 10px;"
        />
        <input type="button" value="搜索" class="searchButton" @click="search1"/>
      </div>
    </div>
    <!-- 搜索内容展示 -->
    <!-- 没有搜索内容展示区域 -->
    <div class="yi1" v-if="isResultShow">
      <img src="@/assets/image/通用.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isResultShow: true, // 控制搜索结果的展示
      searchText: "",
      // 接收数据
      searchShow: "",
      isHover: false,
      newTableData: [],

      tableData: [
        {
          date: "2020-5-20",

          address: "中央办公厅印发《公务员职务与职级并行规定》",
        },
        {
          date: "2020-5-20",

          address: "中央办公厅印发《公务员职务与职级并行规定》",
        },
        {
          date: "2020-5-20",

          address: "中央办公厅印发《公务员职务与职级并行规定》",
        },
        {
          date: "2020-5-20",

          address: "中央办公厅印发《公务员职务与职级并行规定》",
        },
        {
          date: "2020-5-20",

          address: "中央办公厅印发《公务员职务与职级并行规定》",
        },
      ],
    };
  },
  watch:{
searchText(){
  if (this.searchText.length > 0) {
        this.$router.push({
          name: "Search1",
          query: { searchText: this.searchText },
        });
        this.isResultShow = false;
      }
}
  },
  methods: {
     search1() {
    if(this.searchText.trim().length==0){
      this.$message.error('请输入搜索内容')
    }
     
    },
    handleHover() {
      // console.log(this.searchText.length);
      // if (this.searchText.length > 0) {
      //   this.$router.push({
      //     name: "Search1",
      //     query: { searchText: this.searchText },
      //   });
      //   this.isResultShow = false;
      // }
    },
  
    handleBlur() {
      this.isResultShow = true;
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  margin: 0 auto;
  padding-top: 80px;
  height: 50px;
  width: 100%;
}
.box1 {
  padding-top: 40px;
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
.yi1 {
  width: 421px;
  height: 363px;
  margin: 0 auto;

  margin-top: 90px;
}
</style>