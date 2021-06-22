<template>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="真诚服务" name="first">
        <ul>
            <li v-for="item in ClassroomList" :key="item.id">
                <span class="Classroom-new" @click="GoDetail(item)" :id="item.id">{{item.title}}</span>
                <span class="Classroom-time">{{item.publishTime}}</span>
            </li>
        </ul>
        <div v-if="ClassroomList.length>0">
            <Pagination-two :total="total" :params="params" :get="get"></Pagination-two>
        </div>
    </el-tab-pane>
    <el-tab-pane label="联系途径" name="second">
        <ul>
            <li v-for="item in ClassroomList2" :key="item.id">
                <span class="Classroom-new" @click="GoDetail2(item)" :id="item.id">{{item.title}}</span>
                <span class="Classroom-time">{{item.publishTime}}</span>
            </li>
        </ul>
        <div v-if="ClassroomList2.length>0">
         
        </div>
    </el-tab-pane>
</el-tabs>
</template>

<script>

export default {
    components: {
        
    },
    data() {
        return {
		
            activeName: this.$store.state.outsideActive,
            ClassroomList: [{id:11,title:'召开2020数字化时代，老人如何“潮”起来？？？',publishTime:2020-1-9},
      		  {id:21,title:'2020图读懂《国家安全教育记录纳入学生档案 培育壮大新增点增长极的指导意见》',publishTime:2020-1-9},
      		  {id:31,title:'人口老龄化加速应"尽快放开三孩"?专家回应',publishTime:2020-1-9},
      		  {id:41,title:'5前3季农民收入增长1.6%:农民将有更多获得感?如何应对?见',publishTime:2020-1-9},
      		  {id:51,title:'广元市统计局网站建设调查问卷',publishTime:2020-1-9},
      		  {id:61,title:'门户网站用户体验调查问卷',publishTime:2020-1-9},
      		  {id:71,title:'市经信局行政执法满意度调查问卷',publishTime:2020-1-9},
      		  {id:81,title:'人民群众最不满自然资源执法突出问题调查问卷',publishTime:2020-1-9},
      		  {id:91,title:'工业企业运行情况调查问卷',publishTime:2020-1-9}],
            ClassroomList2: [{id:11,title:'召开2020国考报名人数达157.6万 平均61人竞争1职位？？',publishTime:2020-1-9},
      		  {id:21,title:'六部门支持民企加快改革发展与转型升级',publishTime:2020-1-9},
      		  {id:31,title:'新数据新看点:让企业减负 为市场主体添活力',publishTime:2020-1-9},
      		  {id:41,title:'粮食事关国运民生 五年规划和五中全会有何关系?见',publishTime:2020-1-9},
      		  {id:51,title:'广元市统计局网站建设调查问卷',publishTime:2020-1-9},
      		  {id:61,title:'门户网站用户体验调查问卷',publishTime:2020-1-9},
      		  {id:71,title:'市经信局行政执法满意度调查问卷',publishTime:2020-1-9},
      		  {id:81,title:'人民群众最不满自然资源执法突出问题调查问卷',publishTime:2020-1-9},
      		  {id:91,title:'工业企业运行情况调查问卷',publishTime:2020-1-9}],
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
    created() {
       
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

    },
};
</script>

<style scoped>
ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    padding-top: 25px;
    cursor: pointer;
}

ul li:hover {
    background-color: rgba(221, 33, 38, 0.03);
    ;
}

ul li .Classroom-new {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 66px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 736px;
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
</style>
