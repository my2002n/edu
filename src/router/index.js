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
    mode: 'history', //去掉#号
    routes: [{
            path: '/home',
            component: r => require.ensure([], () => r(require('../page/home')), 'home'),

        },
        {
            path: '/login',
            component: r => require.ensure([], () => r(require('../page/login')), 'login')
        }
    ]
    // mode: 'history', //去掉#号
    // routes: [{
    //     path: '',
    //     // redirect: '/index'
    // }, {
    //     path: '/index',
    //     component: r => require([], () => r(require('../page/home')), 'home'),
    //     children: [{
    //             // path: '',
    //             // redirect: 'welcome'
    //             path: 'welcome',
    //             // redirect: 'welcome'
    //         },
    //         {
    //             path: '/login',
    //             name: 'login',
    //             meta: {
    //                 title: '',
    //                 index: 0
    //             },
    //             component: r => require.ensure([], () => r(require('../page/login')), 'login')
    //         },
    //     ]
    // }, {
    //     path: '/login',
    //     name: 'login',
    //     meta: {
    //         title: '用户',
    //         index: 4
    //     },
    //     component: r => require.ensure([], () => r(require('../page/login')), 'login')
    // }]


})
