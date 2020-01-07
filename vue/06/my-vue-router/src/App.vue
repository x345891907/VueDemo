<template>
  <!--
  第一种
  <div id="app">
    <router-link to="/home" tag="button"  replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-view></router-view>
  </div>
  -->
  <!--
  第二种
  <div id="app">
    <router-link to="/home" tag="button"  replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-view></router-view>
  </div>
  -->
  <div id="app">
    <button @click="homeClick()">首页</button>
    <button @click="aboutClick()">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    //通过代码的方式修改路由
      homeClick() {
        this.$router.push("/home");
        console.log("首页");
      },
      aboutClick() {
        this.$router.push("/about");
        console.log("关于");
      }
  }
}
</script>

<style>
/* .router-link-active{
  color: #f00;
} */

/*
第二种
//通是还可以在路由配置linkActiveClass: "active"
.active{
  color: #f00;
} */


</style>
