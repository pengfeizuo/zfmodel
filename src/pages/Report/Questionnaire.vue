<template>
  <div class="all-style-bgc">
    <div class="container">
      <div class="title-tab">
        <span>当前位置：</span>
        <span @click="GoreportInternet">监督举报></span>
        <span @click="GoreportEvaluation">调查评估></span>
        <span>问卷调查></span>
        <span class="red">正文</span>
      </div>
      <!--正文内容-->
      <div class="text">
        <h1>纪检工作调查问卷</h1>
        <h2>采集时间：2020-5-20 13:30 ～ 2020-5-26 13:30</h2>
        <h3>
          预 览
          提交
          纪检工作调查问卷
          问卷调查系统支持30多种题型,可以设置跳转、关联和引用逻辑。支持微信、邮件和短信等方式收集数据,数据回收后可以进行分类统计、交叉分析,并且可以导出到Word、Excel问卷调查系统支持30多种题型,可以设置跳转、关联和引用逻辑。支持微信、邮件和短信等方式收集数据,数据回收后可以进行分类统计、交叉分析,并且可以导出到Word、Excel
        </h3>
        <!--问卷调查开始-->
        <div class="questionnaire-body">
          <!--问卷调查第一大部分开始-->
          <div class="questionnaire-body-one">
            <h1 class="question-headline">一、 调查对象基本情况</h1>
            <div class="question-1">
              <div class="question-title">1.您所在的单位是？（单选）</div>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label>
                  <el-select v-model="formInline.user" placeholder="请选择">
                    <el-option label="请选择" value="shanghai"></el-option>
                    <el-option label="集团各部门" value="beijing"></el-option>
                    <el-option label="二级部门" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label>
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="请选择" value="shanghai"></el-option>
                    <el-option label="集团各部门" value="beijing"></el-option>
                    <el-option label="二级部门" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <!--问题二-->
            <div>
              <div class="question-title">2. 您的性别是？（单选）</div>
              <div>
                <el-radio v-model="radio" label="1" style="display:block;">A. 男</el-radio>
                <el-radio v-model="radio" label="2" style="display:block;">B. 女</el-radio>
              </div>
            </div>
            <!--问题三-->
            <div>
              <div class="question-title">3. 您的年龄是（周岁）？（单选）</div>
              <div>
                <el-radio v-model="radio2" label="1" style="display:block;">A. 18-30岁</el-radio>
                <el-radio v-model="radio2" label="2" style="display:block;">B. 31-40岁</el-radio>
                <el-radio v-model="radio2" label="3" style="display:block;">C. 41-50岁</el-radio>
                <el-radio v-model="radio2" label="4">D. 51-60岁</el-radio>
              </div>
            </div>
            <!--问题四-->
            <div>
              <div class="question-title">4. 您的政治面貌是？（单选）</div>
              <div>
                <el-radio v-model="radio3" label="1" style="display:block;">A.共产党员</el-radio>
                <el-radio v-model="radio3" label="2" style="display:block;">B. 共青团员</el-radio>
                <el-radio v-model="radio3" label="3" style="display:block;">C. 民主党派</el-radio>
                <el-radio v-model="radio3" label="4" style="display:block;">D. 无党派人士</el-radio>
                <el-radio v-model="radio3" label="5" style="display:block;">E. 群众</el-radio>
              </div>
            </div>
            <!--问题五-->
            <div>
              <div class="question-title">5. 您的职务是？（单选）</div>
              <div>
                <el-radio v-model="radio4" label="1" style="display:block;">A.本单位领导班子成员</el-radio>
                <el-radio v-model="radio4" label="2" style="display:block;">B. 本单位部门副经理以上人员</el-radio>
                <el-radio v-model="radio4" label="3" style="display:block;">C. 本单位职员</el-radio>
              </div>
            </div>
          </div>
          <!--问卷调查第一大部分结束-->
          <!--问卷调查第二大部分开始-->
          <div class="questionnaire-body-two">
            <h1 class="question-headline">二、 问卷内容</h1>
            <!--问题2-1-->
            <div>
              <div class="question-title">1. 您对本单位今年全面从严治党、党风廉政建设和反腐败斗争所取得的成效是否满意？（单选，15分）</div>
              <div>
                <el-radio v-model="radio5" label="1" style="display:block;">A. 满意（15分）</el-radio>
                <el-radio v-model="radio5" label="2" style="display:block;">B. 比较满意（10分）</el-radio>
                <el-radio v-model="radio5" label="3" style="display:block;">C. 一般（7分）</el-radio>
                <el-radio v-model="radio5" label="4" style="display:block;">D. 不太满意（3分）</el-radio>
                <el-radio v-model="radio5" label="5" style="display:block;">E. 不满意（0分）</el-radio>
              </div>
            </div>
            <!--问题2-2-->
            <div>
              <div
                class="question-title"
              >1. 您认为本单位党组织在学习贯彻党的十九大精神和习近平新时代中国特色社会主义思想，扎实开展“不忘初心、牢记使命”主题教育方面效果如何？（单选，15分）</div>
              <div>
                <el-radio v-model="radio6" label="1" style="display:block;">A. 很有效（15分）</el-radio>
                <el-radio v-model="radio6" label="2" style="display:block;">B. 比较有效（10分）</el-radio>
                <el-radio v-model="radio6" label="3" style="display:block;">C. 一般（7分）</el-radio>
                <el-radio v-model="radio6" label="4" style="display:block;">D.不太有效（3分）</el-radio>
                <el-radio v-model="radio6" label="5" style="display:block;">E. 没效果（0分）</el-radio>
              </div>
            </div>
            <!--问题2-3-->
            <div>
              <div class="question-title">3. 您认为本单位党组织在坚持正确选人用人导向，坚决纠正选人用人上的不正之风方面成效如何？（单选，10分）</div>
              <div>
                <el-radio v-model="radio7" label="1" style="display:block;">A. 很有效（15分）</el-radio>
                <el-radio v-model="radio7" label="2" style="display:block;">B. 比较有效（10分）</el-radio>
                <el-radio v-model="radio7" label="3" style="display:block;">C. 一般（7分）</el-radio>
                <el-radio v-model="radio7" label="4" style="display:block;">D.不太有效（3分）</el-radio>
                <el-radio v-model="radio7" label="5" style="display:block;">E. 没效果（0分）</el-radio>
              </div>
            </div>
            <!--文本框-->
            <div>
              <h1 class="question-headline">三、 意见和建议</h1>
              <div class="demonstration">您对深入开展全面从严治党、党风廉政建设和反腐败斗争还有哪些意见和建议？（填空题）</div>
              <div>
                <el-input type="textarea" :rows="2" placeholder="如无意见请填无" v-model="textarea"></el-input>
              </div>
            </div>
          </div>
          <!--问卷调查第二大部分结束-->
          <el-row>
            <el-button type="danger">提交</el-button>
          </el-row>
        </div>
        <!--问卷调查结束-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      radio: "",
      radio2: "",
      radio3: "",
      radio4: "",
      radio5: "",
      radio6: "",
      radio7: "",
      textarea: ""
    };
  },
  methods: {
    GoreportInternet() {
      this.$router.push("/report/reportInternet");
    },
    GoreportEvaluation() {
      this.$router.push("/report/reportEvaluation");
    },
    onSubmit() {
      console.log("submit!");
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
.text > h1 {
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 56px;
  text-align: center;
}
.text > h2 {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 44px;
  text-align: center;
}
.text > h3 {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  margin-bottom: 38px;
}
/*问卷调查插件*/
.demonstration {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 9px;
}
.question-headline {
  font-size: 16px !important;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400 !important;
  color: rgba(0, 0, 0, 1) !important;
  line-height: 54px !important;
  display: block !important;
}
.question-title {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 44px;
}
/deep/ .el-textarea__inner {
  min-height: 158px !important;
}
/deep/ .el-button--danger {
  margin-top: 40px !important;
  margin-left: 26px;
  width: 112px;
  height: 38px;
  background: rgba(221, 33, 38, 1);
  border-radius: 4px;
}
/deep/ .el-radio__label {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
</style>