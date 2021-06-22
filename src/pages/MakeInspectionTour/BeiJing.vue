<template>
  <div>
  
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in list" :key="item.id" :label="item.itemName" :name="''+item.itemValue">
        <div class="liebiao">
          <div
            v-for="(item) in list1"
            :key="item.id"
            class="sousuo"
            :class="{'isActive':item.id==activeId}"
            @click="goDetail(item.id)"
          >
            <span class="first">{{item.title}}</span>
            <span class="second">{{item.publishTime}}</span>
          </div>
            <!-- 分页 -->
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
      </el-tab-pane>
    </el-tabs>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeId: 1,
      activeName: "",
      list: [],
      //  参数
      params: {
        pageNum: 1,
        pageSize: 10,
        sortCode1: 0,
      },
      // page: 1,
      // 总条数
      total: 0,
      // 思想列表
      list1: [],
      timer: null,
    };
  },
  mounted() {
    this.get();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 北京列表
    get() {
      this.Api.getBeijing1({
        typeCode:"BJ_INFO_SORT1"
      }).then((res) => {
        if (res.code == 0) {
          this.list = res.data;
          console.log("" + this.list[0].itemValue);
          this.activeName = "" + this.list[0].itemValue;
          this.params.sortCode1 = this.activeName;
          this.get1();
        }
      });
    },
    get1() {
      this.Api.getBeijing(this.params).then((res) => {
        if (res.code == 0) {
          this.list1 = res.data.records;
          this.total = res.data.total;
        }
        console.log(this.list1);
      });
    },
      // 跳转详情
    goDetail(id) {
      console.log('跳转前',id);
       this.$router.push({name:"Bj1",query:{id:id}})
       
    },
    handleClick(tab, event) {
      this.params.sortCode1 = tab.name;
      this.get1();
    },
    // 分页
    //数据条数发生变化
    handleSizeChange(newSize) {
      this.params.pageSize = newSize;
      this.get1();
    },
    //翻页触发
    handleCurrentChange(currPage) {
      this.params.pageNum = currPage;
      this.get1();
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-tabs__nav-wrap::after {
  content: "";
  height: 1px;
  z-index: 1;
}
.yi {
  position: absolute;
  left: 1070px;
  top: 98px;
  font-size: 16px;
  color: #999999;
}
/deep/.el-table .cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-right: 10px;
  font-size: 16px;
}
.jianjie {
  font-size: 16px !important;
  color: #333333 !important;
}
.jianjie1 {
  margin-top: 20px;
  font-size: 16px !important;
  color: #333333 !important;
}
.el-table {
  margin-top: 20px;
}
.first {
 width: 700px;
 overflow: hidden; 
 text-overflow:ellipsis; 
 white-space: nowrap;
  color: #333333;
  font-size: 16px;
}
.sousuo {
  cursor: pointer;
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
span:hover {
  color: red;
}
.fenye{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>