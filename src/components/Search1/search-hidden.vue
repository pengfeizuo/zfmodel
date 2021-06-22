<template>
    <div class="SearchHidden">
        
<div class="yi" v-if="isResultShow=true">
  <img src="@/assets/image/通用.png" alt="">
</div>
    </div>
</template>
<script>
export default {
    name: "SearchHidden",
    props: {
    searchText: {
      type: String,
      required: true
    }
  },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    .yi{
  width: 421px;
  height: 363px;
  margin: 0 auto;
  border: 1px dashed #888888;
  margin-top: 90px;
}
</style>