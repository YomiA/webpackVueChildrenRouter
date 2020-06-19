import Vue from 'vue'

import VueRouter from "vue-router";

// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 app 组件，这里要注意路径的问题
import app from './App.vue'

// 导入自定义 路由 模块
import routerObj from './router'

var vm = new Vue({
    el:'#app',
    render:function (createElment) {
        return createElment(app)
    },
    // 4. 将路由对象 挂载 到 vm 上
    router: routerObj
})