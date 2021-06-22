<template>
<div id="loader-wrapper">
    <div id="loader">
        <img src="@/assets/image/logo.png" alt @click="open" />
    </div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
    <div class="load_title"></div>
</div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods: {
        open() {
            /*加载动画*/
            $('#loader').click(function () {
                $('body').addClass('loaded')
                setTimeout(function () {
                    $("body").css('overflow', 'auto');
                }, 3300)
            })
        },
    },
};
</script>

<style lang="less" scoped>
/*加载动画*/
#loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
}

#loader {
    display: block;
    position: relative;
    left: 50%;
    top: 25%;
    width: 402px;
    height: 330px;
    margin-left: -201px;
    cursor: pointer;
    /*border-radius: 50%;

border: 3px solid transparent;*/
    /* COLOR 1 */
    /*border-top-color: #FFF;*/

    /* Chrome, Firefox 16+, IE 10+, Opera */
    z-index: 1001;
}

#loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    /* Old browsers */
    z-index: 1000;
    -webkit-transform: translateX(0);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateX(0);
    /* IE 9 */
    transform: translateX(0);
    /* Firefox 16+, IE 10+, Opera */
}

#loader-wrapper .loader-section.section-left {
    left: 0;
}

#loader-wrapper .loader-section.section-right {
    right: 0;
}

/* Loaded */

.loaded #loader-wrapper .loader-section.section-left {
    -webkit-transform: translateX(-100%);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateX(-100%);
    /* IE 9 */
    transform: translateX(-100%);
    /* Firefox 16+, IE 10+, Opera */
    -webkit-transition: all 3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader-wrapper .loader-section.section-right {
    -webkit-transform: translateX(100%);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateX(100%);
    /* IE 9 */
    transform: translateX(100%);
    /* Firefox 16+, IE 10+, Opera */
    -webkit-transition: all 3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader {
    opacity: 0;
    -webkit-transition: all 2s ease-out;
    transition: all 2s ease-out;
}

.loaded #loader-wrapper {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateY(-100%);
    /* IE 9 */
    transform: translateY(-100%);
    /* Firefox 16+, IE 10+, Opera */
    -webkit-transition: all 0.3s 3.3s ease-out;
    transition: all 0.3s 3.3s ease-out;
}
</style>
