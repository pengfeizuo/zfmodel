<template>
 <div>
<img src="@/assets/image/22.png" alt="">
   <!-- <el-table
   class="table"
      :data="tableData"
      :span-method="arraySpanMethod"
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
        label="流程名称">
      </el-table-column>
      <el-table-column
        prop="juece"
       width="100px"
        label="风险事件编号">
      </el-table-column>
      <el-table-column
        prop="zhidu"
       width="80px"
        label="风险事件描述">
      </el-table-column>
      <el-table-column
        prop="biaozhun"
        width="94px"
        label="控制目标">
      </el-table-column>
       <el-table-column
        prop="jcfw"
        width="80px"
        label="控制标准编号">
      </el-table-column>
       <el-table-column
        prop=" qtbm"
        width="85px"
        label="控制标准">
      </el-table-column>
       <el-table-column
        prop="zth"
        width="54px"
        label="控制属性">
      </el-table-column>
       <el-table-column
        prop="dwh"
        width="54px"
        label="控制证据">
      </el-table-column>
       <el-table-column
        prop="zjl"
         width="56px"
        label="责任部门">
      </el-table-column>
        <el-table-column
        prop=" dsh"
         width="56px"
        label="制度对应条目">
      </el-table-column>
        <el-table-column
        prop=" cz"
         width="110px"
        label="权限指引表对应索引号">
      </el-table-column>
        
    </el-table> -->



 </div>
    

 
</template>
<script>
export default {
  data() {
    return {
		tableData: [{
          id: '采购管理',
        
        }, {
          id: '01',
          fenlei: '采购管理',
         juece: 'R-21.1.1',
          zhidu: '缺乏采购申请、采购申请未经适当审批或超越授权审批，可能导致采购物资过量或不足，影响公司正常生产经营。',
         biaozhun: '采购需求事前经恰当审批',
         jcfw:'C-21.1.1',
         qtbm:'采购需求申请及审批办公室审核各部门提交的物资采购需求，并与各部门联合完成需求调查及采购方式合理性论证，并对采购需求进行严格把关。服务采购项目无需提交采购申请直接提报采购方案。',
         zth:'手工控制',
         dwh:'采购需求申请及审批记录',
         zjl:'采购需求部门/办公室',
         dsh:'采购管理办法：第十一条',
         cz:'CG-QX-21.1',
         
        },]
	};
  },
 methods: {
arraySpanMethod({ rowIndex}) {
if (rowIndex === 0) {
return [1, 12];
}
}
}


};
</script>
<style lang="less" scoped>
/deep/.el-table tbody tr:hover>td { 
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
.el-table::before {
    height: 0px;
}
/deep/.el-table--border {
    border-top: 0px solid #EBEEF5;
}
/deep/ .is-leaf{
  border-right: 0;
  background-color:#FAFAFA ;
}
.table{
  cursor: pointer;
}
</style>