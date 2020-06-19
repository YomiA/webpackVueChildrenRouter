在 webpack 中使用 Vue Router:
1. 在 main.js 中导入 vue ，然后引出一个 vue 实例 (import Vue from 'vue')
2. 然后再写一个组件，再在 main.js 中导入这个组件 (import app from './App.vue')
   导入vue组件的时候，记得路径要给对，不然会出错
3. 就是安装 vue-router 插件使用 cnpm i vue-router -S
4. 安装完成之后，那就要拿来用了，在 main.js 文件中，在导入 vue 的下方，我们也要导入 vue-router 包
   import VueRouter from 'vue-router',导入之后，那么就要手动安装 VueRouter 使用 use
   Vue.use(VueRouter)
5. 创建路由对象，var routerObj = new VueRouter({routes:[{path:'路径'，component:对应的导入的组件}]})
6. 把一些 路由 组件 弄到 路由对象里面去，最后再把 路由对象 给挂载到 vm 中去，也就是页面中
7. 挂载到 vm 中去 的时候，因为 render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把路由的
   router-view 和 router-link 直接写到 el 所控制的元素中去
8. 在组件中使用样式：如果你想要这个样式只在这个组件中的有效，而不是全局都有效，那么你要再这个组件中的 style 中加一个属性
   为 scoped 才能在这个组件有效，其他组件中无效
9. 普通的 style 标签只支持 普通的样式，如果想要启用 scss 和 less，则需要为 style 元素，设置 lang 属性 格式为
   lang="scss"
10. 注意：只要我们的 style 标签，是在 .vue 组件中定义的，那么，推荐都为 style 开启 scoped 属性