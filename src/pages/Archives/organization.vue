<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="集团" name="first">
      <div>
        <table
          class="organization-table"
          cellpadding="12px"
          cellspacing="0px"
          border
          bordercolor="#E8E8E8"
        >
          <th>部门</th>
          <th>纪委书记/纪检委员</th>
          <tr v-for="item in tableDataGroup" :key="item.id">
            <td>{{item.tip}}</td>
            <td class="twoz">{{item.content|nameFormat}}</td>
          </tr>
        </table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="二级公司" name="second">
      <div>
        <table
          class="organization-table"
          cellpadding="12px"
          cellspacing="0px"
          border
          bordercolor="#E8E8E8"
        >
          <th>部门</th>
          <th>书记</th>
          <tr v-for="item in tableDataGroup2" :key="item.id">
            <td>{{item.tip}}</td>
            <td class="twoz">{{item.content|nameFormat}}</td>
          </tr>
        </table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tableDataGroup: [],
      tableDataGroup2: [],
    };
  },
  filters: {
    nameFormat(value) {
      if (value.length < 3) {
        //如果是两个汉字
        value = value.slice(0, 1) + "　" + value.slice(1); //拆分字符串并加入全角的空格
      }
      return value;
    },
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {
  },
};
</script>
<style scoped>
table.organization-table {
  margin: 0 auto;
  width: 920px;
}

table.organization-table th {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(250, 250, 250, 1);
  height: 40px;
  line-height: 40px;
}

table.organization-table tr td {
  text-align: center;

  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  line-height: 42px;
}
</style>