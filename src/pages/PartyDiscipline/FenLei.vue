<template>
  <div class="FenLei">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="党内法规制度" name="first">
        <el-tabs v-model="active2" @tab-click="handleSecondClick">
          <el-tab-pane
            v-for="item in data1"
            :key="item.itemValue"
            :label="item.itemName"
            :name="item.itemValue"
          >
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
      </el-tab-pane>
      <el-tab-pane label="国家法律法规" name="second">
        <el-tabs v-model="active3" @tab-click="handleClick3">
          <el-tab-pane
            v-for="item in data2"
            :key="item.itemValue"
            :label="item.itemName"
            :name="item.itemValue"
          >
            <div class="liebiao">
              <div
                v-for="(item) in list2"
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
                  @size-change="handleSizeChange1"
                  @current-change="handleCurrentChange1"
                  :current-page="params1.pageNum"
                  background
                  :page-sizes="[2, 5,10]"
                  :page-size="params1.pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total1"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      activeId: 1,
      data1: [ 
            		  {id:11,itemName:'政策法规',beginTime:2020-1-9},
            		  {id:21,itemName:'条款制度',beginTime:2020-1-9},
            		  {id:31,itemName:'党的章程',beginTime:2020-1-9},
            		  
            		  ],
      data2: [],
      // 分类
      options: [],
      // 详细分类
      options1: [],
      activeId: 1,
      active1: "first",
      active2: "1",
      active3: "10",
      page: 1,
      pageSize: 10,
      //  参数
      params: {
        pageNum: 1,
        pageSize: 10,
        sortCode1: "",
        sortCode2: "",
      },
      params1: {
        pageNum: 1,
        pageSize: 10,
        sortCode1: "",
        sortCode2: "",
      },
      // 总条数
      total: 0,
      total1: 0,
      // 思想列表
      list1: [{id:41,title:'广元市林业局行政执法群众满意度调查问卷',beginTime:2020-1-9},
            		  {id:51,title:'广元市统计局网站建设调查问卷',beginTime:2020-1-9},
            		  {id:61,title:'门户网站用户体验调查问卷',beginTime:2020-1-9},
            		  {id:71,title:'市经信局行政执法满意度调查问卷',beginTime:2020-1-9},
            		  {id:81,title:'人民群众最不满自然资源执法突出问题调查问卷',beginTime:2020-1-9},
            		  {id:91,title:'工业企业运行情况调查问卷',beginTime:2020-1-9}],
      list2: [],
    };
  },
  created() {
     this.Api.getFenlei({
        pageNum: this.page,
        pageSize: this.pageSize,
        sortCode1: 1,
        sortCode2: 1,
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.list1 = res.data.records;
          this.total = res.data.total;
         
        }
      });
   
    // 分类
    this.Api.Fenlei({
      typeCode: "DJFG_SORT_LEVREL1",
    }).then((res) => {
      this.options = res.data;
    });
    this.Api.Fenlei1({
      pItemValue: 1,
      typeCode: "DJFG_SORT_LEVREL2",
    }).then((res) => {
      this.data1 = res.data;
      this.active2 = "" + this.data1[0].itemValue;
    });
    this.Api.Fenlei2({
      pItemValue: 2,
      typeCode: "DJFG_SORT_LEVREL2",
    }).then((res) => {
      this.data2 = res.data;
      console.log(this.data2);
    });
  },

  methods: {
    handleClick(tab, event) {},
    handleSecondClick(tab, event) {
      this.params.sortCode1 = 1;
      this.params.sortCode2 = tab.name;
      this.get();
     
    },
    handleClick3(tab, event) {
      this.params1.sortCode1 = 2;
      this.params1.sortCode2 = tab.name;
      this.get1();
     
    },
    // 列表
    get() {
      this.Api.getFenlei({
        pageNum: this.page,
        pageSize: this.pageSize,
        sortCode1: 1,
        sortCode2: this.params.sortCode2,
      }).then((res) => {
        if (res.code == 0) {
          console.log(res);
          this.list1 = res.data.records;
          this.total = res.data.total;
        
        }
      });
    },
    get1() {
      this.Api.getFenlei1({
        pageNum:this.page,
        pageSize:this.pageSize,
        sortCode1: 2,
        sortCode2: this.params1.sortCode2,
      }).then((res) => {
        if (res.code == 0) {
          this.list2 = res.data.records;
          this.total1 = res.data.total;
        }
      });
    },
    // 跳转详情
    goDetail(id) {
      console.log("跳转前", id);
      this.$router.push({ name: "DZ", query: { id: id } });
    },
    // 分页
    //数据条数发生变化
    handleSizeChange(newSize) {
      console.log(newSize, "fffffff");
      this.pageSize = newSize;
      this.get();
    },
    //翻页触发
    handleCurrentChange(currPage) {
      console.log(currPage);
      this.page = currPage;
      this.get();
    },
    // 分页
    //数据条数发生变化
    handleSizeChange1(newSize) {
      this.pageSize = newSize;
      this.get1();
    },
    //翻页触发
    handleCurrentChange1(currPage) {
      this.page = currPage;
      this.get1();
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-table .cell {
  font-size: 16px;
}
/deep/.el-tabs__nav-wrap::after {
  content: "";
  height: 1px;
  z-index: 1;
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
.first {
 width: 700px;
 overflow: hidden; 
 text-overflow:ellipsis; 
 white-space: nowrap;
  color: #333333;
  font-size: 16px;
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