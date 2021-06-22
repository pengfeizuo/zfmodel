<template>
  <div>
   
     <ul>
      <li v-for="item in list" :key="item.id"  @click="goDetail(item.id)">
        <span class="Classroom-new"  :id="item.id">{{item.title}}</span>
        <span class="Classroom-time">{{item.publishTime}}</span>
      </li>
    </ul>
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
    // 列表
   get() {
      this.Api.getDj(this.params).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.list = res.data.records;
          this.total = res.data.total;
        }
      });
  },
    
   // 跳转详情
    goDetail(id) {
      console.log('跳转前',id);
       this.$router.push({name:"Detail1",query:{id:id}})
       
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
ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E8E8E8;
  
}

ul li .Classroom-new {
   width: 700px;
 overflow: hidden; 
 text-overflow:ellipsis; 
 white-space: nowrap;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 66px;
  cursor: pointer;
}
ul li .Classroom-time {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 66px;
}
 ul li span:hover{
   color: red;
 }
 .fenye{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>