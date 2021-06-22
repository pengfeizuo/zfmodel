<template>
<div class="swiper-box">
    <div class="wrap" :style="{height:newheight+'px'}" @mouseenter="handlermMouseenter" @mouseleave="handlermMouseleave">
        <div class="list" :style="{left:left+'px'}" :class="{'classtrue':istrue}">
            <div :style="{width:newwidth+'px',height:newheight+'px'}" class="item" v-for="(item,index) in swiperList" :key="index">
                <a :href="item.url" target="blank">
                    <img :src=" baseUrl+item.picUrl" alt />
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            istrue: false,
            speed: 1,
            left: 0,
            timer: null,
            PICsPACE: localStorage.getItem("picSpace"),
            newwidth: this.width,
            newheight: this.height,
            swiperList: [],
        };
    },
    watch: {
        list: {
            deep: true,
            handler(newVal, oldVal) {
                this.start();
            }
        }
    },
    computed: {
        // swiperList() {
        //     return [...this.list, ...this.list];
        // },
       baseUrl() {
         return "https://www.hyxdsoft.com/";
       },
    },
    created() {
        // console.log(this.list, 55555);

        // console.log(this.width,777)
        // this.start();
    },
    mounted() {

    },
    methods: {
        //滚动开始
        start() {
            // console.log(111111111)
            // console.log(this.newstyle, "this.newstyle")
            // console.log(this.list, "this.list")
            this.swiperList = [...this.list]
            if (this.newstyle == 1 && this.list.length > 3) {
                this.swiperList = []
                this.swiperList = [...this.list, ...this.list]
                this.timer = setInterval(() => {
                    this.left -= this.speed;
                    if (this.left < -1169) {
                        this.left = 0;
                    }
                }, 17);
            } else if (this.newstyle == 2 && this.list.length > 6) {
                this.swiperList = []
                this.swiperList = [...this.list, ...this.list]
                this.timer = setInterval(() => {
                    this.left -= this.speed;
                    if (this.left < -1169) {
                        this.left = 0;
                    }
                }, 17);
            } else if (this.newstyle == 2 && this.list.length <= 6) {
                this.istrue = true;
            } else if (this.newstyle == 1 && this.list.length <= 3) {
                this.istrue = true;
            }

        },
        handlermMouseenter() {
            clearInterval(this.timer);
        },
        handlermMouseleave() {
            this.start();
        },
        handlerClick(item) {
            window.open(item.url);
        },
    },
    destroyed() {
        clearInterval(this.timer);
    },
    props: ["list", "width", "height", "newstyle"],
};
</script>

<style lang="less" scoped>
.swiper-box {
    padding: 0 20px;
    width: 1160px;
    background: white;

    .wrap {
        position: relative;
        overflow: hidden;
        padding: 20px 0;
        background: white;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;

        .list {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            // left: 50% !important;
            // top: 50%;
            // transform: translate(-50%, -50%);

            .item {
                //   width: 372px;
                margin-right: 22px;
                overflow: hidden;

            }
        }
    }
}

img {
    object-fit: cover;
}

.classtrue {
    left: 50% !important;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
