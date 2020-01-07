import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/about.vue'

//通过Vue.use使用插件(安装插件)
Vue.use(Router)

//创建vue-router对象并导出
export default new Router({
  //配置路由与组件之间的关系
  routes: [
      {
        //默认路径
        path: "",
        //redirect重定向
        redirect: "/home"
      },
      {
        path: "/home",
        component: Home
      },
      {
        path: "/about",
        component: About
      }
  ],
  mode: "history",
  linkActiveClass: "active"
})
