import Vue from 'vue'
import ElementUI, { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './assets/css/index.css'
import './styles/index.less'
import './plugins/element.js'
import './styles/iconfont.js'

// Loading
//富文本
import VueQuillEditor from 'vue-quill-editor';
//  require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.config.productionTip = false
import router from "@/router/index.js"
import {store} from "@/store/store.js"
Vue.use(ElementUI);
//富文本编辑器
Vue.use(VueQuillEditor)

import md5 from 'js-md5'  //引入
Vue.prototype.$md5 = md5;  //定义全局变量
// 跳转后返回顶部
router.beforeEach((to, from, next) => {
  if (from.path == "/home") {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
  }else{
    next()
  }

})



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
