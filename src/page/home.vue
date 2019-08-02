<template>
    <div class='home-container'>
        <div class='left-container'>
            <!--            <div class = 'title'>直播课堂</div>-->
            <div class="title">
                <img src="../../src/assets/img/welcome/logoText.png" alt="">
            </div>
            <div class="icon-list">
                <img src="../../src/assets/img/welcome/icon1.png" alt="">
                <img src="../../src/assets/img/welcome/icon2.png" alt="">
                <img src="../../src/assets/img/welcome/icon3.png" alt="">
                <img src="../../src/assets/img/welcome/icon4.png" alt="">
            </div>
            <div class="active-line">
                <span>会员</span>
            </div>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#22345E" text-color="#fff" active-text-color="#55A8FD">
                <el-submenu index="1">
                    <template slot="title">
                        <div class="circle"></div>
                        <span>欢迎</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">欢迎页</el-menu-item>
                        <el-menu-item index="1-2">
                            <router-link to="/login">学生</router-link>

                        </el-menu-item>
                        <el-menu-item index="1-3">新增学生</el-menu-item>
                        <el-menu-item index="1-3">
                            <router-link to="/studentList">学生列表</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <div class="circle"></div>
                        <span>讲师</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">新增讲师</el-menu-item>
                        <el-menu-item index="1-2">讲师列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <div class="circle"></div>
                        <span>学科</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">新增学科</el-menu-item>
                        <el-menu-item index="1-2">学科列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <div class="circle"></div>
                        <span>班级</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">新增班级</el-menu-item>
                        <el-menu-item index="1-2">班级列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content">
                <Warn></Warn>
                <Welcome></Welcome>
            </div>

            <!-- 内容区域 -->
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Warn from '../../src/components/Warn';
    import Welcome from '../../src/components/Welcome';
    import Header from '../../src/components/Header';
    export default {
        name: 'home',
        data() {
            return {
                headerList: ['会员', '欢迎', '欢迎页']
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            Warn,
            Welcome,
            Header
        },
    }

</script>
<style lang="less" scoped>
    @import url('../../src/assets/less/Mixins.less');
    @import url('../../src/assets/less/common.less');

    html,
    body {
        height: 100%
    }

    .home-container {
        min-width: 1280px;
        min-height: 840px;
        background: #EEF4F9;
        height: 100%;

        .icon-list {
            background: #22345E;

            img {
                height: 36px;
                width: 52px;
            }
        }

        .active-line {
            height: 45px;
            line-height: 45px;
            background: #22345E;
            color: #FFFFFF;
            text-align: left;
            font-size: 14px;
            padding-left: 20px;
            position: relative;

            &::before {
                height: 40%;
                width: 2px;
                content: "";
                background: #55A8FD;
                position: absolute;
                left: 0px;
                top: 27%;
                display: inline-block;
            }
        }

        .left-container {
            width: 224px;
            float: left;

            .title {
                height: 80px;

                img {
                    width: 224px;
                    height: 80px;
                }

                /*background: #55A8FD;*/
                /*font-size:26px;*/
                /*line-height: 80px;*/
                /*color: #ffffff;*/
            }

            .circle {
                height: 4px;
                width: 4px;
                background: #55A8FD;
                border-radius: 2px;
                position: relative;
                top: 30px;
                left: 60px;
            }
        }

        .right-container {
            height: 100%;
            background: #EEF4F9;
            width: calc(100% - 224px);
            min-width: 1056px;
            float: right;

            .header {
                height: 80px;
                background: #ffffff;
            }

            .right-content {
                width: calc(100% - 46px);
                margin-left: 16px;
            }

        }
    }

</style>
<style lang="less">
    .left-container {
        ul {
            background-color: #22345E
        }
    }

</style>
