<template>
<div>
    <div class="pic-box">
     <img :src="pic" alt class="pic-internet-report" />
       
    </div>
</div>
</template>

<script>
import pic from "@/assets/image/网上举报.png"
export default {
    data() {
        return {
            PicInternetReport: "",
            PICsPACE: sessionStorage.getItem("picSpace"),
            pic: pic,
        };
    },
    created() {
        this.get();
        // console.log(this.baseUrl, "图PIN路径");
    },
 
    methods: {
        get() {
        },
    },
};
</script>

<style scoped>
.pic-internet-report {
    width: 920px;
    height: 460px;
}

.pic-box {
    min-width: 920px;
    min-height: 460px;
    background: white;
    padding: 41px 40px;
}
</style>
