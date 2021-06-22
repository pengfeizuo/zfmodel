<template>
<div id="app">
    <!--
    <Cover v-if="showCover" class="coverAnimate" :class="{active:timeOut}"></Cover>-->
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Footer></Footer>
</div>
</template>

<script>
import Tabbar from "@/components/TabBar/tabbar.vue";
import Footer from "@/components/Footer/footer.vue";
// import Cover from "@/components/Cover";
export default {
    name: "App",
    components: {
        Tabbar,
        Footer,
        // Cover,
    },
    data() {
        return {
            isSecond: sessionStorage.getItem("isSecond"),
            // isSecond: false,
            showCover: false,
            timeOut: false,
        };
    },
    created() {
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.coverAnimate {
    transition: opacity 1s;
    opacity: 1;

    &.active {
        opacity: 0;
    }
}
</style>
