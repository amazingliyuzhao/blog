/**
  ts版本的路由
  2022年2月28日21:00:46
  CL
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CoverPage from '../components/CoverPage.vue';
import HomePage from '../components/HomePage.vue';

/**
 * 定义路由模块
 * 2022年2月28日21:41:54
 * CL
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: CoverPage,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
];

/**
 * 定义返回模块
 */
const router = createRouter({
  history: createWebHistory('/'), // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
  routes,
});

export default router;
