<template>
  <div>
    <div class="liebiao">
      <div
        v-for="(item) in list"
        :key="item.id"
        class="sousuo"
        :class="{'isActive':item.id==activeId}"
        @click="goDetail(item.id)"
      >
        <span class="first">{{item.title}}</span>
        <span class="second">{{item.publishTime}}</span>
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
</template>
<script>
export default {
  data() {
    return {
      activeId: 1,

      //  参数
      params: {
        pageNum: 1,
        pageSize: 10,
      },
      // 总条数
      total: 0,
      // 思想列表
      list: [
      		  {id:11,title:'你认为应该从哪些方面建立我市耕地保护补偿机制？？',beginTime:2020-1-9},
      		  {id:21,title:'2020安全生产调查问卷',beginTime:2020-1-9},
      		  {id:31,title:'广元市人民群众最不满意行政执法突出问题调查问卷',beginTime:2020-1-9},
      		  {id:41,title:'广元市林业局行政执法群众满意度调查问卷',beginTime:2020-1-9},
      		  {id:51,title:'广元市统计局网站建设调查问卷',beginTime:2020-1-9},
      		  {id:61,title:'门户网站用户体验调查问卷',beginTime:2020-1-9},
      		  {id:71,title:'市经信局行政执法满意度调查问卷',beginTime:2020-1-9},
      		  {id:81,title:'人民群众最不满自然资源执法突出问题调查问卷',beginTime:2020-1-9},
      		  {id:91,title:'工业企业运行情况调查问卷',beginTime:2020-1-9}
      		  ],
    };
  },
  created() {
    this.get();
  },
  methods: {
    // 列表
    get() {
      this.Api.getBisk(this.params).then((res) => {
        if (res.code == 0) {
          this.list = res.data.records;
          this.total = res.data.total;
        }
      });
    },
    // 跳转详情
    goDetail(id) {
      this.$router.push({ name: "SX", query: { id: id } });
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
  },
};
</script>
<style lang="less" scoped>
/deep/.el-table__row {
  height: 74px;
}
/deep/div.cell {
  padding-left: 40px;
}
.data {
  margin-right: 0;
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
span:hover {
  color: red;
}
.second {
  color: #999999;
}
.first {
  overflow-wrap: break-word;
  color: #333333;
  font-size: 16px;
}
.fenye {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
li span:first-child:hover {
  color: red;
}
/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: red;
    color: #FFF;
}
</style>