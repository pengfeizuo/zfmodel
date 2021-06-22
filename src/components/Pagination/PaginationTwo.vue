<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="params.pageNum"
      :page-size="params.pageSize"
      layout="prev, pager, next,sizes, jumper"
      :total="total"
      background
      :page-sizes="[1, 5,10]"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  methods: {
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
  data() {
    return {};
  },
  props: ["total", "params", "get",]
};
</script>
<style lang="less" scoped>
.block {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>