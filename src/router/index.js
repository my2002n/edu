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
            path: '/addStudent',
            component: r => require.ensure([], () => r(require('../page/addStudent')), 'addStudent')
        },
        {
            path: '/studentList',
            component: r => require.ensure([], () => r(require('../page/studentList')), 'studentList')
        },
        {
            path: '/addTeacher',
            component: r => require.ensure([], () => r(require('../page/addTeacher')), 'addTeacher')
        },
        {
            path: '/teacherList',
            component: r => require.ensure([], () => r(require('../page/teacherList')), 'teacherList')
        },
        {
            path: '/addSubject',
            component: r => require.ensure([], () => r(require('../page/addSubject')), 'addSubject')
        },
        {
            path: '/subjectList',
            component: r => require.ensure([], () => r(require('../page/subjectList')), 'subjectList')
        },
        {
            path: '/addClass',
            component: r => require.ensure([], () => r(require('../page/addClass')), 'addClass')
        },
        {
            path: '/classList',
            component: r => require.ensure([], () => r(require('../page/classList')), 'classList')
        },
        {
            path: '/largeClassList',
            component: r => require.ensure([], () => r(require('../page/largeClassList')), 'largeClassList')
        },
        // 登陆注册
        {
            path: '/login',
            component: r => require.ensure([], () => r(require('../page/login')), 'login')
        },
        {
            path: '/schoolRegister',
            component: r => require.ensure([], () => r(require('../page/schoolRegister')), 'schoolRegister')
        },
        {
            path: '/login',
            component: r => require.ensure([], () => r(require('../page/login')), 'login')
        },
        // 学生开始
        {
            path: '/liveClass',
            component: r => require.ensure([], () => r(require('../page/liveClass')), 'liveClass')
        },
        {
            path: '/liveCourse',
            component: r => require.ensure([], () => r(require('../page/liveCourse')), 'liveCourse')
        },


    ]
})
