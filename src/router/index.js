import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    path: '/',
    mode: 'history', //去掉#号
    routes: [{
            path: '',
            component: r => require.ensure([], () => r(require('../page/home')), 'home'),

        },
        {
            path: '/login',
            component: r => require.ensure([], () => r(require('../page/login')), 'login')
        }
    ]
})
