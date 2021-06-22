<template>
  <div class="XiaoTieShi">
    
 <div class="liebiao" >
        <div v-for="(item) in list" :key="item.id"
        @click="goDetail(item.id)"
         class="sousuo">
          <span class="first">{{item.title}}</span>
          <span class="second">{{item.publishTime}}</span>
        </div>
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
</template>
<script>
export default {
  data() {
    return {
       //  参数
      params: {
        pageNum: 1,
        pageSize: 10,
      },
      // 总条数
      total: 0,
      // 思想列表
      list: [],
       
    };
  },
  created() {
    this.get();
  },
  methods: {
    // 跳转详情
    goDetail(id) {
    console.log(123);
      console.log('跳转前',id);
       this.$router.push({name:"XtsDetail",query:{id:id}})
       
    },
      tableData1({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        // 指定列号
        return "color:#999999";
      } else {
        return "";
      }
    },
      // 列表
    get() {
      this.Api.getTips(this.params).then((res) => {
        if (res.code == 0) {
          console.log(res);
          this.list = res.data.records;
          this.total = res.data.total;
        }
      });
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
  }
};
</script>
<style lang="less" scoped>

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
.first{
  width: 700px;
 overflow: hidden; 
 text-overflow:ellipsis; 
 white-space: nowrap;
  color: #333333;
  font-size: 16px;
}
span:hover{
  color: red;
}
.fenye{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>