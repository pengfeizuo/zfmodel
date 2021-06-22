<template>
  <div class="tools">
    <el-form :inline="true" :model="toolsData.formData" class="toolsBar">
      <el-form-item v-for="(item,key) in toolsData.searchs" :key="key" :label="item.label+'：'">
        <el-input
          :placeholder="item.placeholder"
          v-if="!item.type || (item.type==='text')"
          v-model.trim="toolsData.formData[key]"
          size="small"
          :style="{width:`${item.itemWidth||150}px`}"
          clearable
        ></el-input>
        <el-select
          v-if="item.type === 'select'"
          v-model="toolsData.formData[key]"
          :style="{width:`${item.itemWidth||150}px`}"
          size="small"
        >
          <el-option
            v-for="opc in item.options"
            :key="opc.value"
            :label="opc.label"
            :value="opc.value"
          ></el-option>
        </el-select>
        <el-date-picker
          :value-format="item.valueFormat"
          :style="{width:`${item.itemWidth||360}px`}"
          v-if="(item.type === 'daterange') || (item.type === 'datetimerange')"
          size="small"
          v-model="toolsData.formData[key]"
          :type="item.type"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item v-if="toolsData.searchs && Object.keys(toolsData.searchs).length">
        <div style="display:flex;">
          <el-button type="primary" size="small" @click="$emit('search',1)">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
    <div class="toolsBtn" v-if="toolsData.buttons">
      <!-- exportBtn -->
      <el-button
        v-for="item in toolsData.buttons"
        :key="item.text"
        @click="$emit(item.emit || 'add',item.param || 'Create')"
        :type="item.type"
        :icon="item.icon"
      >{{item.text}}</el-button>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import utils from "@/views/shop/utils/index.js";
export default {
  components: {},
  props: {
    toolsData: {
      type: Object,
      default: () => {
        return {
          /**
           * searchs:{
           *    key:{ // key对应formData绑定的值
           *      type:text(输入框，默认值可省略);
           *      type:select(选择框);
           *      type:daterange(年月日区间)(valueFormat属性生效，值可为：yyyy-MM-dd HH:mm:ss  or  timestamp);
           *      type:datetimerange(年月日时分秒区间)(valueFormat属性生效，值可为：yyyy-MM-dd HH:mm:ss  or  timestamp);
           *      itemWidth:宽度，值默认"150"（可省略）
           *      label:名称
           *    }
           * }
           */
          searchs: {
            tel: {
              label: "手机号",
              placeholder: "请输入手机号",
              itemWidth: 150
            },
            status: {
              label: "状态",
              type: "select",
              options: [
                { label: "全部", value: null },
                { label: "启动", value: 0 },
                { label: "停用", value: 1 }
              ]
            },
            dateInterval: {
              label: "年月日",
              type: "daterange",
              valueFormat: "yyyy-MM-dd"
            },
            dateTimeInterval: {
              label: "年月日时分秒",
              type: "datetimerange",
              valueFormat: "yyyy-MM-dd HH:mm:ss"
            }
          },
          formData: {
            tel: "",
            name: "",
            account: "",
            status: null,
            dateInterval: "",
            dateTimeInterval: ""
          },
          createBtn: {
            text: "创建",
            id: 0
          },
          buttons: [
            {
              // 按钮名称
              text: "创建意见建议",
              // emit方法参数
              param: "Create",
              //  emit方法名(默认 add)
              emit: "add",
              //  按钮类型(默认 primary)
              type: "primary",
              // 按钮图标(默认 'el-icon-plus')
              icon: "el-icon-plus",
              // 按钮id
              id: 101
            }
          ]
        };
      }
    }
  },
  data() {
    return {
      utils
    };
  },
  mounted() {},
  methods: {
    reset() {
      const oraginData = this.$parent.$options.data().toolsData.formData;
      this.toolsData.formData = {
        ...this.toolsData.formData,
        ...oraginData
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.tools {
  display: flex;
  // flex-direction: column;
  padding-top: 20px;
}

.tools .toolsBar {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.tools .toolsBar /deep/ .el-form-item {
  display: flex;
  // width: 340px;
  margin-bottom: 20px;
  &:last-child {
    width: 44px;
  }
}
.tools .toolsBar /deep/ .el-form-item .el-form-item__content {
  flex: 1;
}

// .tools
//   .toolsBar
//   /deep/
//   .el-form-item
//   .el-form-item__content
//   .el-range-separator {
//   width: 14%;
// }

// .tools .toolsBar .el-form-item .icon-sousuo {
//   width: 32px;
// }

.tools .toolsBtn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
}
.tools /deep/ .el-form-item__label,
.tools /deep/ .el-form-item__content {
  line-height: 32px;
}
</style>