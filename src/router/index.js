
import Vue from 'vue'
import vueRouter from 'vue-router';
// 1.0.2 将vueRouter和vue绑定起来
Vue.use(vueRouter)

// 导入.vue组件对象
const index = resolve => {require.ensure([], () => {resolve(require('src/page/index.vue'))},'index')}

// 1.0.3 定义路由规则
var router = new vueRouter({
  routes:[
    {name:'default',path:'/',redirect:'/index'},
    {name:'index',path:'/index',component:index},
  ]
});

export default router;
