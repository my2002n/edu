import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// export default [{
//     path: '/',
//     component: App,
//     children: [{
//         path: '',
//         component: r => require.ensure([], () => r(require('../page/home')), 'home')
//     }, {
//         // path: '/item',
//         // component: r => require.ensure([], () => r(require('../page/item')), 'item')
//     }, {
//         // path: '/score',
//         // component: r => require.ensure([], () => r(require('../page/score')), 'score')
//     }]
// }]

export default new Router({
    path: '/',
    mode: 'history',//去掉#号
    routes: [
      {
        path: '/home',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
      },
      {
        path: '/login',
        component: r => require.ensure([], () => r(require('../page/login')), 'login')
      }
    ]

})