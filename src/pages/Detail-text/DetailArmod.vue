<template>
<div class="all-style-bgc">
    <div class="container">
        <div class="title-tab">
            <span>当前位置：</span>
            <span @click="GoreportInternet">首页></span>
            <span class="red">正文</span>
        </div>
        <!--正文内容-->
        <div class="text">
            <h1>{{StudyBox.title}}</h1>

            <h2 class="from-box">
                <div class="mg-16">来源：{{StudyBox.source}}</div>|
                <div class="mg-16">发布时间：{{StudyBox.publishTime}}</div>
            </h2>

            <div class="ql-container ql-snow">
                <h3 class="ql-editor" v-html="StudyBox.context"></h3>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            StudyBox: {},
        };
    },
    methods: {
        GoreportInternet() {
            this.$router.push("/forum");
        },
        GoreportEvaluation() {
            this.$router.push({
                name: "forumOutside"
            });
        },
        GoreportOutside() {
            this.$router.push({
                name: "forumOutside"
            });
        },
        //详情数据湖区
        get() {
            this.Api.getArmodDetail({
                id: this.StudyBoxID
            }).then((res) => {
                this.StudyBox = res.data;
                // console.log(this.StudyBox,666)
            });
        },
    },
    computed: {
        StudyBoxID() {
            return this.$route.query.id;
        },
    },
    created() {
        this.get()
    },
};
</script>

<style lang="less" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
}

/*副导航兰*/
.title-tab {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 54px;
    cursor: pointer;
}

.red {
    color: red;
}

/*问卷调查正文*/
.text {
    background-color: white;
    padding: 44px 60px 121px 60px;
    margin: 0 auto;
}

.text h1 {
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 56px;
    text-align: center;
}

.text h2 {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 44px;
    text-align: center;
    padding-bottom: 14px;
    border-bottom: 1px solid #E8E8E8;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}

.text h3 {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
    margin-bottom: 30px;
}

/*静态页面样式 */
.PIC-BOX {
    display: flex;
    justify-content: center;
}

img {
    margin: 20px 0px;
}

.from-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .mg-16 {
        margin: 0px 16px;
        height: 30px;
        text-align: center;
    }
}
</style>
