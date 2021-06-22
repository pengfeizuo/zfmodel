<template>
 <div>
<img src="@/assets/image/11.png" alt="">
   <!-- <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      class="table"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        width="50px">
      </el-table-column>
      <el-table-column
        prop="fenlei"
        width="50px"
        label="分类">
      </el-table-column>
      <el-table-column
        prop="juece"
       width="100px"
        label="决策事项">
      </el-table-column>
      <el-table-column
        prop="zhidu"
       width="80px"
        label="制度出处">
      </el-table-column>
      <el-table-column
        prop="biaozhun"
        width="102px"
        label="集团公司“三重一大”标准">
      </el-table-column>
       <el-table-column
        prop="jcfw"
        width="80px"
        label="决策范围">
      </el-table-column>
       <el-table-column
        prop=" qtbm"
        width="85px"
        label="牵头部门">
      </el-table-column>
       <el-table-column
        prop="zth"
        width="54px"
        label="专题会">
      </el-table-column>
       <el-table-column
        prop="dwh"
        width="54px"
        label="党委会">
      </el-table-column>
       <el-table-column
        prop="zjl"
         width="64px"
        label="总经理
办公会">
      </el-table-column>
        <el-table-column
        prop=" dsh"
         width="54px"
        label="董事会">
      </el-table-column>
        <el-table-column
        prop=" cz"
         width="108px"
        label="出资人
（上级单位）">
      </el-table-column>
         <el-table-column
          width="36px"
        prop="bz"
        label="备注">
      </el-table-column>
    </el-table> -->



 </div>
    

 
</template>
<script>
export default {
  data() {
    return {
		tableData: [{
          id: '一、党建工作',
        
        }, {
          id: '01',
          fenlei: '',
         juece: '学习宣传贯彻执行党的路线方针政策，传达上级文件、会议、指示精神和决策部署',
          zhidu: '党委会议室规则',
         biaozhun: '全部事项',
         jcfw:'集团公司',
         qtbm:'党委办公室',
         zth:'',
         dwh:'研究决定',
         zjl:'',
         dsh:'',
         cz:'',
         bz:''
        }, {
          id: '02',
         fenlei: '',
         juece: '公司党的政治建设、思想建设、作风建设、纪律建设和制度建设等工作',
          zhidu: '党委会议室规则',
          biaozhun:'全部事项',
         jcfw:'集团公司',
          qtbm:'党委办公室',
           zth:'',
         dwh:'研究决定',
         zjl:'',
         dsh:'',
         cz:'',
         bz:''
        }, {
          id: '03',
         fenlei: '',
         juece: '意识形态工作、文化建设以及涉及意识形态安全、文化安全等重大事项',
            zhidu: '党委会议室规则',
         biaozhun:'全部事项',
        jcfw:'集团公司',
         qtbm:'党委办公室',
          zth:'',
         dwh:'研究决定',
         zjl:'',
         dsh:'',
         cz:'',
         bz:''
        },
         {
          id: '04',
         fenlei: '',
         juece: '以党委名义向上级请示、报告的重要问题以及向所属企业发布的指示、通知、通报等重要文件',
           zhidu: '党委会议室规则',
         biaozhun: '全部事项',
         jcfw:'集团公司',
          qtbm:'党委办公室',
        zth:'',
         dwh:'研究决定',
         zjl:'',
         dsh:'',
         cz:'',
         bz:''
        }]
	};
  },
 methods: {
arraySpanMethod({ rowIndex}) {
if (rowIndex === 0) {
return [1, 13];
}
}
}


};
</script>
<style lang="less" scoped>
/deep/.el-table tbody tr:hover>td { 
    background-color:#FCE9EA!important
}
/deep/.el-table tbody th:hover>td { 
    background-color:#FCE9EA!important
}
/deep/.el-table th>.cell {
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    color:black;
   
}
.el-table--border::after{ 
    width: 0px;
}
/deep/.el-card__body{
  padding: 40px;
}
/deep/ .is-leaf{
  border-right: 0;
  background-color:#FAFAFA ;
}
.table{
  cursor: pointer;
}
</style>