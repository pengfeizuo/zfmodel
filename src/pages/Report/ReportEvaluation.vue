<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="问卷调查" name="first">
        <ul>
          <li v-for="item in ClassroomList" :key="item.id" @click="GoQuestionnaire">
            <span class="Classroom-new">{{item.title}}</span>
            <span class="Classroom-time">{{item.beginTime}}</span>
          </li>
        </ul>
        <div v-if="ClassroomList.length>0">
          <Pagination-two :total="total" :params="params" :get="get"></Pagination-two>
        </div>
      </el-tab-pane>
      <el-tab-pane label="工作评估" name="second">
        <ul>
          <li v-for="item in ClassroomList2" :key="item.id" @click="GoJobEvaluation">
            <span class="Classroom-new">{{item.title}}</span>
            <span class="Classroom-time">{{item.opTime}}</span>
          </li>
        </ul>
        <div v-if="ClassroomList2.length>0">
          <Pagination-two :total="total2" :params="params2" :get="gett"></Pagination-two>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PaginationTwo from "@/components/Pagination/PaginationTwo.vue";
export default {
  components: {
    PaginationTwo,
  },
  data() {
    return {
      activeName: "first",
	  ClassroomList: [
		  {id:1,title:'您认为我市体育应加强哪方面发展？',beginTime:2020-1-9},
		  {id:2,title:'2020年第七次全国人口普查知晓度调查问卷',beginTime:2020-1-9},
		  {id:3,title:'广元市林业局集体林权制度改革工作调查问卷',beginTime:2020-1-9},
		  {id:4,title:'广元市林业局行政执法群众满意度调查问卷',beginTime:2020-1-9},
		  {id:5,title:'人防相关知识网络调查问卷',beginTime:2020-1-9},
		  {id:6,title:'饮用水水源地保护调查问卷',beginTime:2020-1-9},
		  {id:7,title:'市经信局行政执法满意度调查问卷',beginTime:2020-1-9},
		  {id:8,title:'人民群众最不满自然资源执法突出问题调查问卷',beginTime:2020-1-9},
		  {id:9,title:'工业企业运行情况调查问卷',beginTime:2020-1-9}
		  ],
      ClassroomList2: [
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
      // 总条数
      total: 0,
      total2: 0,
      //  参数1
      params: {
        pageNum: 1,
        pageSize: 10,
      },
      //  参数2
      params2: {
        pageNum: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    GoQuestionnaire() {
      this.$router.push("/questionnaire");
    },
    GoJobEvaluation() {
      this.$router.push("/jobevaluation");
    },
 
  },
  created() {
    
  },
};
</script>
<style  scoped>
ul li {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
  width: 918px;
}
ul li .Classroom-new {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 66px;
}
ul li .Classroom-time {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 66px;
}
li span:first-child:hover {
  color: red;
}
.box {
  padding: 41px 40px;
  background: white;
  min-height: 546px;
  width: 920px;
}
</style>