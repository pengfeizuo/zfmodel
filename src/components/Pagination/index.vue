<template>
<div class="block">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="params.pageNum" :page-size="params.pageSize" layout="prev, pager, next,sizes, jumper" :total="total" background :page-sizes="[5, 10,20]"></el-pagination>
</div>
</template>

<script>
export default {
    methods: {
      
        handleSizeChange(newSize) {
            this.params.pageSize = newSize;
            this.get();
        },
        //翻页触发
        handleCurrentChange(currPage) {
            this.params.pageNum = currPage;
            this.get();
            // console.log(111)
        },
    },
    data() {
        return {};
    },
    props: ["total", "params", "get", ]
};
</script>

<style lang="less" scoped>
.block {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
}

/deep/.active {
    background-color: #DD2126 !important;
    border-radius: 7px !important;
}
</style>
