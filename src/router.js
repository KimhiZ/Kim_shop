import VueRouter from 'vue-router'

//导入对应的路由组件 
import HomeContainer from './components/tabbar/HomeContainer.vue'
import CategoryContainer from './components/tabbar/CategoryContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import DiscoveryContainer from './components/tabbar/DiscoveryContainer.vue'
import mycontainer from './components/tabbar/mycontainer.vue'
import Newslist from './components/news/Newslist.vue'
import login from './components/tabbar/login.vue'
import reg from './components/tabbar/reg.vue'
import newsinfo from './components/news/newsinfo.vue'
import comment from './components/subcomponents/comment.vue'
import image from './components/subcomponents/images.vue'
import about from './components/subcomponents/about.vue'
import dis from './components/subcomponents/dis.vue'

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/home/news', component: Newslist },
        { path: '/home/news/newsinfo/:id',component:newsinfo},
        { path: '/category', component: CategoryContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/discovery', component: DiscoveryContainer },
        { path: '/my', component: mycontainer },
        { path: '/login', component: login },
        { path: '/reg', component: reg },
        { path: '/comment', component: comment },
        { path: '/image', component: image },
        { path: '/about', component: about },
        { path: '/dis/:id', component: dis },
    ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router