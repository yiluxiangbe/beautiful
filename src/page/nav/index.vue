<template>
  <div class="nav">
    <div class="left-nav">
      <div id="side-nav">
        <ul id="nav" v-for="item1 in navList" :key="item1.id1">
          <li>
            <a href="javascript:;">
              <i class="iconfont left-nav-li" :lay-tips="会员管理">&#xe6b8;</i>
              <cite>{{ item1.title1 }}</cite>
              <i class="iconfont nav_right">&#xe697;</i></a
            >
            <ul class="sub-menu">
              <li v-for="item2 in item1.data" :key="item2.id2">
                <a onclick="add_tab()">
                  <i class="iconfont">&#xe6a7;</i>
                  <cite>{{ item2.title2 }}</cite></a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'layui-src/dist/css/layui.css'
import 'layui-src/dist/layui.js'
import navJson from '@/assets/json/nav.json'
import { add_tab } from '@/assets/js/xadmin'
export default {
  name: 'Nav',
  data() {
    return {
      navList: navJson.data
    }
  },
  mounted() {
    layui.use(['layer', 'form'], function () {
      const layer = layui.layer
      const form = layui.form

      // 在这里使用 layui 的组件和功能
      // 例如：layer.msg('Hello layui!');
    })
  },
  methods: {
    add_tab() {
      add_tab('统计页面', 'welcome1.html')
    }
  }
}
</script>

<style lang="less" scoped>
/* --------------- */
.left-nav {
  position: absolute;
  top: 45px;
  bottom: 0px;
  /*bottom: 42px;*/
  left: 0;
  z-index: 2;
  padding-top: 10px;
  background-color: #eeeeee;
  width: 220px;
  max-width: 220px;
  overflow: auto;
  overflow-x: hidden;
  overflow: hidden;

  /*width: 0px;*/
}
#side-nav {
  width: 220px;
}

.left-nav #nav li:hover > a {
  /*color: blue;*/
}
.left-nav #nav .current {
  background-color: rgba(0, 0, 0, 0.3);
}
.left-nav #nav li a {
  font-size: 14px;
  padding: 10px 15px 10px 15px;
  display: block;
  cursor: pointer;
  border-left: 4px solid transparent;
  transition: all 0.3s;
}
.left-nav a:hover {
  background: #009688 !important;
  color: #fff;
  border-color: #04564e !important;
}
.left-nav a.active {
  background: #009688 !important;
  color: #fff;
  border-color: #04564e !important;
}
.left-nav #nav li a cite {
  font-size: 14px;
}

.left-nav #nav li .sub-menu {
  display: none;
}
.left-nav #nav li .opened {
  display: block;
}
.left-nav #nav li .opened:hover {
  /*background: #fff ;*/
}
.left-nav #nav li .opened .current {
}
.left-nav #nav li .sub-menu li:hover {
  /*color: blue;*/
  /*background: #fff ;*/
}
.left-nav #nav li .sub-menu li a {
  padding: 12px 15px 12px 30px;
  font-size: 14px;
  cursor: pointer;
}
.left-nav #nav li .sub-menu li .sub-menu li a {
  padding-left: 45px;
}
/*.left-nav #nav li .sub-menu li a:hover{
    color: #148cf1;
}*/
.left-nav #nav li .sub-menu li a i {
  font-size: 12px;
}
.left-nav #nav li a i {
  padding-right: 10px;
  line-height: 14px;
}
.left-nav #nav li .nav_right {
  float: right;
  font-size: 16px;
}
.x-slide_left {
  width: 17px;
  height: 61px;
  // background: url(../images/icon.png) 0 0 no-repeat;
  position: absolute;
  top: 200px;
  left: 220px;
  cursor: pointer;
  z-index: 3;
}
</style>
