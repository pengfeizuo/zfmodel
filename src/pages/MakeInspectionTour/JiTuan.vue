<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in list" :key="item.id" :label="item.title" :name="''+item.id">
        <p class="jianjie" v-html="item.context"></p>

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
          :current-page="page"
          background
          :page-sizes="[2,5,10]"
          :page-size="size"
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
        relation: 0,
      },
      // page: 1,
      page: 1,
      size: 10,
      // 总条数
      total: 0,
      // 思想列表
      list1: [],
    
    };
  },
 created() {
    this.get();
  },
  
  methods: {
    // 集团列表
    get() {
      this.Api.getGroup().then((res) => {
        if (res.code == 0) {
          this.list = res.data;
          console.log("" + this.list[0].id);
          this.activeName = "" + this.list[0].id;
          this.get1();
        }
      });
    },
    // 跳转详情
    goDetail(id) {
    
      this.$router.push({ name: "Jt1", query: { id: id } });
    },
    get1() {
      this.Api.getGroup1({
         pageNum: this.page,
        pageSize:this.size,
        relation:this.activeName,
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.list1 = res.data.records;
          this.total = res.data.total;
        }
      
      });
    },
    handleClick(tab, event) {
      this.params.relation = tab.name;
      this.get1();
    },
    // 分页
    //数据条数发生变化
    handleSizeChange(newSize) {
      this.size = newSize;
      this.get1();
    },
    //翻页触发
    handleCurrentChange(currPage) {
       this.page = currPage;
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
  text-overflow: ellipsis;
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
.fenye {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>