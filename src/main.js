//入口文件

import Vue from 'vue'
//导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
    //导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//按需导入组件
import { Header, Swipe, SwipeItem, Button, Switch, Field } from 'mint-ui'
import VuePreview from'vue-preview'




Vue.use(VuePreview) 
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
Vue.component(Switch.name, Switch);
Vue.component(Button.name, Button)
Vue.component(Field.name, Field);
//导入router.js路由模块
import router from './router.js'



import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,

})