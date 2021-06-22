<template>
<div>
    <ul>
        <li v-for="(item,index) in ClassroomList" :key="item.id">
            <span class="Classroom-new" @click="GoDetail(item)" :id="index">{{item.title}}</span>
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
            obj: [{
                    RouteingPath: "/sjjy1"
                },
                {
                    RouteingPath: "/sjjy2"
                },
                {
                    RouteingPath: "/sjjy3"
                },
                {
                    RouteingPath: "/sjjy4"
                },
                {
                    RouteingPath: "/sjjy5"
                },
            ],
            ClassroomList: [
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
            //  参数
            params: {
                pageNum: 1,
                pageSize: 10,
            },
        };
    },
    methods: {
        //路由跳转打开新页面
        GoDetail(item) {
            // var itemID = e.currentTarget.id;
            // // console.log(this.obj[itemID])
            // var a = this.obj[itemID].RouteingPath;
            // // console.log(a)/sjjy1
            // // this.$router.push({ path: a });
            // let Logistics = this.$router.resolve({
            //   path: a,
            //   query: {
            //     Amount: 10,
            //   },
            // });
            // window.open(Logistics.href, "_blank");
            //详情页跳转
            let ID = {
                id: item.id
            };
            this.$router.push({
                name: "DetailEducation",
                query: {
                    id: item.id
                }
            });
        },
    
 

    },
    created() {
       
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
    margin-bottom: 25px;
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
