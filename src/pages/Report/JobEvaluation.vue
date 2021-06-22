<template>
  <div class="all-style-bgc">
    <div class="container">
      <div class="title-tab">
        <span>当前位置：</span>
        <span @click="GoreportInternet">监督举报></span>
        <span @click="GoreportEvaluation">调查评估></span>
        <span>工作评估></span>
        <span class="red">正文</span>
      </div>
      <!--正文内容-->
      <div class="text">
        <h1>中央纪委国家监委办公厅印发通知做好政务处分法实施工作调查问卷</h1>
        <h2>发布时间：2020-5-20 13:30</h2>
        <h3>6月20日，第十三届全国人民代表大会常务委员会第十九次会议通过了《中华人民共和国公职人员政务处分法》（以下简称《政务处分法》），自2020年7月1日起施行。为推动纪检监察系统做好《政务处分法》实施工作，提高政务处分工作规范化、法治化水平，中央纪委办公厅、国家监委办公厅于近日专门印发了有关通知。通知强调，要充分认识制定《政务处分法》的意义。《政务处分法》深入贯彻习近平新时代中国特色社会主义思想，认真落实党的十九大和十九届二中、三中、四中全会精神，是在新的起点上深化纪检监察体制改革，坚持和完善党和国家监督体系，推进国家治理体系和治理能力现代化的重要制度成果。《政务处分法》作为新中国成立以来第一部全面系统规范公职人员政务处分工作的国家法律，将监察全覆盖的要求进一步具体化，使政务处分匹配党纪处分、衔接刑事处罚，构筑起惩治职务违法的严密法网，对于健全反腐败国家立法，强化对权力运行的制约和监督，构建一体推进不敢腐、不能腐、不想腐体制机制具有重要意义。</h3>
        <!--监督评分-->
        <div class="score">
          <div class="title-pf">一、选择题</div>
          <div class="block">
            <span class="demonstration">1、您认为廉政建设怎么样？</span>
            <div class="margin-31">
              <div class="fuwenben">您可以从使用，操作是否方便等方面进行评分。</div>
              <el-rate v-model="value1" :colors="colors"></el-rate>
            </div>
          </div>
          <div class="block">
            <span class="demonstration">2、您认为学习效果怎么样？</span>
            <div class="margin-31">
              <el-rate v-model="value2" :colors="colors"></el-rate>
            </div>
          </div>
          <!--文本框-->
          <div>
            <div class="demonstration">3、您认为课堂设置该如何优化</div>
            <div class="margin-31">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
            </div>
          </div>
          <el-row>
            <el-button type="danger">提交</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#DD2126", "#DD2126", "#DD2126"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      textarea: ""
    };
  },
  methods: {
    GoreportInternet() {
      this.$router.push("/report/reportInternet");
    },
    GoreportEvaluation() {
      this.$router.push("/report/reportEvaluation");
    }
  }
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
}
.text h3 {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  margin-bottom: 38px;
}
/*评分*/
.block {
    margin-bottom: 33px;
}
.score .title-pf {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 30px;
}
.demonstration {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  margin-top: 33px;
  margin-bottom: 9px;
}
.fuwenben {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin: 6px 0;
}
.margin-31 {
  margin-left: 26px;
}
/deep/ .el-textarea__inner{
    min-height: 158px !important;
}
/deep/ .el-button--danger{
    margin-top: 40px !important;
    margin-left: 26px;
    width:112px;
height:38px;
background:rgba(221,33,38,1);
border-radius:4px;
}
</style>