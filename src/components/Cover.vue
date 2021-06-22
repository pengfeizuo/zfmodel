<template>
<div class="cover">
    <section class="section" :style="{'background-image':`url(${bg_cover})`}"></section>
</div>
</template>

<script>
import bg_cover from "@/assets/bg_cover.png";
import ripples from "@/components/jquery.ripples-min";
export default {
    data() {
        return {
            bg_cover,
        };
    },
    mounted() {
        $("section").ripples({
            dropRadius: 25,
            perturbance: 0.05,
            interactive: false // 鼠标事件
        });
        $("section").ripples('drop', 1000, 500, 120, 0.03)
    },
};
</script>

<style lang="less" scoped>
.cover {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    // overflow: hidden;
}

.section {
    width: 1920px;
    height: 1080px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>
