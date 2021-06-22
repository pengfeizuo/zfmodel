<template>
<div>
    <ul>
        <li v-for="item in ClassroomList" :key="item.id">
            <span class="Classroom-new" @click="GoDetail(item)" :id="item.id">{{item.title}}</span>
            <span class="Classroom-time">{{item.publishTime}}</span>
        </li>
    </ul>
    <div v-if="ClassroomList.length>0">
       
    </div>
</div>
</template>

<script>

export default {
    components: {
      
    },
    data() {
        return {
			
            ClassroomList: [
      		  {id:11,title:'召开2020年前三季度经济形势新闻发布会？？',publishTime:2020-1-9},
      		  {id:21,title:'2020图读懂《关于扩大战略性新兴产业投资 培育壮大新增点增长极的指导意见》',publishTime:2020-1-9},
      		  {id:31,title:'关于全面推进城镇老旧小区改造工作的实施意见',publishTime:2020-1-9},
      		  {id:41,title:'四川省人民政府办公厅 关于进一步完善药品和医用耗材集中采购制度的指导意见',publishTime:2020-1-9},
      		  {id:51,title:'广元市统计局网站建设调查问卷',publishTime:2020-1-9},
      		  {id:61,title:'门户网站用户体验调查问卷',publishTime:2020-1-9},
      		  {id:71,title:'市经信局行政执法满意度调查问卷',publishTime:2020-1-9},
      		  {id:81,title:'人民群众最不满自然资源执法突出问题调查问卷',publishTime:2020-1-9},
      		  {id:91,title:'工业企业运行情况调查问卷',publishTime:2020-1-9}],
            ClassroomListD: {},
            // 总条数
            total: 0,
            //  参数
            params: {
                pageNum: 1,
                pageSize: 10,
            },
        };
    },
};
</script>

<style scoped>
ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    line-height: 16px;
    padding-bottom: 25px;
    padding-top: 25px;
    margin-bottom: 25px;
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
    width: 736px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

ul li .Classroom-time {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
}

li span:first-child:hover {
    color: red;
}
</style>
