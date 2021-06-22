<template>
<div>
    <div class="title-ld">**************班子成员</div>
    <div class="one">
      <span class="li-1">
        <span class="first-zi">书</span>记：
      </span>
      <span class="li-2">何鹏刚</span>
    </div>
    <div class="one">
      <span class="li-1">副书记：</span>
      <span class="li-2 two">张静</span>
    </div>
    <div class="one">
      <span class="li-1">
        <span class="first-zi">委</span>员：
      </span>
      <span class="li-2">李大鹏</span>
      <span class="li-2 two">何鹏飞</span>
      <span class="li-2">张金凤</span>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            leadingList: [],
        };
    },
    created() {
    },
    methods: {
        nameFormat(value) {
            // .replace(/，/g," ")
            const value_copy = value.split("，");
            const value_copy_fmt = value_copy.map((item) => {
                return item.length > 2 ? item : item.slice(0, 1) + "　" + item.slice(1);
            });

            // return value_copy_fmt.join("&nbsp;");
            return value_copy_fmt;
        },
    },
    filters: {
        // nameFormat(value) {
        //     // .replace(/，/g," ")
        //     const value_copy = value.split("，");
        //     const value_copy_fmt = value_copy.map((item) => {
        //         return item.length > 2 ? item : item.slice(0, 1) + "　" + item.slice(1);
        //     });

        //     // return value_copy_fmt.join("&nbsp;");
        //     return value_copy_fmt;
        // },
        nameforn(value) {
            if (value.length < 3) {
                value = value.slice(0, 1) + "　" + value.slice(1); //拆分字符串并加入全角的空格
            }
            return value;
        },
        split(value) {
            value = value.split(",");
            return value;
        },
    },
};
</script>

<style lang="less" scoped>
.title-er {
    min-width: 270px;
    height: 45px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 550;
    color: #333333;
    line-height: 45px;
    margin-bottom: 26px;
    margin-top: 80px;
}

.tip-title-er {
    display: inline-block;
    width: 80px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 26px;
    margin-right: 10px;
}

.title-ld {
    min-width: 270px;
    height: 45px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 45px;
    margin-bottom: 26px;
}

.tip-title {
    display: inline-block;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 26px;
    margin-right: 20px;
}

.tip-li {
    margin-bottom: 10px;
}

.tip-name {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 26px;
}

.li-1 {
    float: left;
    width: 64px;
    height: 26px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 26px;
    margin-bottom: 9px;
    margin-right: 17px;
}

.li-2 {
    float: left;
    width: 64px;
    height: 26px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 26px;
}

.one {
    overflow: hidden;
}

.two {
    letter-spacing: 1em;
}

.first-zi {
    margin-right: 16px;
}

ul {
    margin-bottom: 70px;
}
</style>
