<template>
  <div class="contairn">
    <div class="first" v-for="(item,key) in list" :key="item.id">
      <p class="yi">{{key}}</p>
      <div class="box">
        <ul>
          <li v-for="inner in item" :key="inner.id">
            <a :href="inner.url" target="blank">
              <img :src="inner.pic" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.get();
    setTimeout(() => {
      console.log(this.baseUrl);
    }, 2000);
  },
  computed: {
    baseUrl() {
      return this.$store.state.fileIp;
    },
  },
  methods: {
    // 跳转详情
    goDetail(id) {
      this.$router.push({ name: "SX", query: { id: id } });
    },
    // 列表
    get() {
      this.Api.getCenter().then((res) => {
        if (res.code == 0) {
          console.log(res);
          // this.list = res.data;
          const filterData = {};
          for (const item of res.data) {
            if (filterData[item.title]) {
              filterData[item.title] = [
                ...filterData[item.title],
                ...item.exList,
              ];
            } else {
              filterData[item.title] = item.exList;
            }
          }
          this.list = filterData;
          console.log(filterData, "filterData");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.first {
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
}
// .yi {
 
// }
.first:nth-child(odd) {
  color: #dd2126;
   font-size: 28px;
  text-align: center;
}
.first:nth-child(even) {
  color: #0069ff;
  font-size: 28px;
  text-align: center;
}
.er {
  color: #0069ff;
  font-size: 18px;
}

ul {
  margin-top: 47px;
  display: flex;
  flex-wrap: wrap;
}
.first ul li img {
  width: 288px;
  height: 82px;
  flex: 1;
  justify-content: flex-end;
}
ul li {
  margin-right: 15px;
 margin-top: 15px;
}
.second,
.third {
  margin-top: 40px;
}
.yi{
  width: 100%;
  display: inline-block;
  overflow-wrap: break-word;
}
</style>