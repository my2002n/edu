<template>
    <div class='left-container'>
        <!--            <div class = 'title'>直播课堂</div>-->
        <div class="title">
            <img src="../../src/assets/img/welcome/logoText.png" alt="">
        </div>
        <div class="icon-list">
            <span @click="handleClickIcon(1)" :class="{deepColor: activeTab === 'Member'}">
                <img src="../../src/assets/img/welcome/icon1.png" alt="" v-if="activeTab !== 'Member'">
                <img src="../../src/assets/img/welcome/icon11.png" alt="" v-else>
            </span>
            <span @click="handleClickIcon(2)" :class="{deepColor: activeTab === 'Show'}">
                <img src="../../src/assets/img/welcome/icon2.png" alt="" v-if="activeTab !== 'Show'">
                <img src="../../src/assets/img/welcome/icon21.png" alt="" v-else>
            </span>
            <span @click="handleClickIcon(3)" :class="{deepColor: activeTab === 'Tv'}">
                <img src="../../src/assets/img/welcome/icon3.png" alt="" v-if="activeTab !== 'Tv'">
                <img src="../../src/assets/img/welcome/icon31.png" alt="" v-else>
            </span>
            <span @click="handleClickIcon(4)" :class="{deepColor: activeTab === 'Text'}">
                <img src="../../src/assets/img/welcome/icon4.png" alt="" v-if="activeTab !== 'Text'">
                <img src="../../src/assets/img/welcome/icon41.png" alt="" v-else>
            </span>

        </div>
        <div class="active-line">
            <span v-if="activeTab === 'Member'">会员</span>
            <span v-if="activeTab === 'Show'">直播</span>
        </div>
        <!--第一个-->
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#22345E" text-color="#fff"
            active-text-color="#55A8FD" v-if="activeTab === 'Member'" :default-openeds="openeds" @open="handleOpen">
            <el-submenu index="1">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">欢迎</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/">欢迎页</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">学生</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">
                        <router-link to="/addStudent">新增学生</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <router-link to="/studentList">学生列表</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">讲师</span>
                </template>
                <el-menu-item-group>

                    <el-menu-item index="3-1">
                        <router-link to="/addTeacher">新增讲师</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <router-link to="/teacherList">讲师列表</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">学科
                    </span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">
                        <router-link to="/addSubject">新增学科</router-link>
                    </el-menu-item>
                    <el-menu-item index="4-2">
                        <router-link to="/subjectList">学科列表</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">班级</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">
                        <router-link to="/addClass">新增班级</router-link>
                    </el-menu-item>
                    <el-menu-item index="5-2">
                        <router-link to="/classList">班级列表</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        <!-- 第二个 -->
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#22345E" text-color="#fff"
            active-text-color="#55A8FD" v-if="activeTab === 'Show'" :default-openeds="openeds">
            <el-submenu index="2">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">直播大班课</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/largeClassList">新增直播大班课</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/largeClassList">大班课列表</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link to="/largeClassList">进入教室</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">直播小班课</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/largeClassList">新增直播小班课</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/largeClassList">小班课列表</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <!-- <div class="circle"></div> -->
                    <span class="nav-title">直播1v1</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/addClass">新增直播客1v1</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/addClass">1v1课列表</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                activeTab: 'Member', // 默认显示会员
                myOpeneds: this.openeds
            }
        },
        props: {
            openeds: {
                type: Array,
                default: function () {
                    return []
                }

            }
        },
        methods: {
            // 点击上面图标
            handleClickIcon(index) {
                if (index === 1) {
                    this.activeTab = 'Member'
                }
                if (index === 2) {
                    this.activeTab = 'Show'
                }
                if (index === 3) {
                    this.activeTab = 'Tv'
                }
                if (index === 4) {
                    this.activeTab = 'Text'
                }

                console.log('this.activeTab', this.activeTab)

            },
            handleOpen(key, keyPath) {
                let openStr = key + ''
                this.openeds = [openStr]
            },

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import url('../../src/assets/less/Mixins.less');
    @import url('../../src/assets/less/common.less');

    .left-container {
        width: 224px;
        float: left;

        .el-menu {
            width: 224px;
        }

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

        .icon-list {
            height: 36px;
            /*background: #22345E;*/
            background: rgb(56, 73, 114);
            .flex(row, space-between, center, nowrap);

            .deepColor {
                background: #22345E;
            }

            span {
                height: 100%;
                width: 25%;
                cursor: pointer;
                text-align: center;

                img {
                    margin-top: 8px;
                }

            }
        }

        .nav-title {
            &::before {
                height: 4px;
                width: 4px;
                content: "";
                background: #55A8FD;
                border-radius: 2px;
                display: inline-block;
                position: relative;
                left: -10px;
                top: -2px;
                // position: absolute;
                // left: 0px;
                // top: 27%;

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
                height: 32%;
                width: 2px;
                content: "";
                background: #55A8FD;
                position: absolute;
                left: 0px;
                top: 35%;
                display: inline-block;
            }
        }

        .el-menu {
            a {
                color: #FFFFFF;
                text-decoration: none;
            }
        }
    }

</style>
<style lang='less'>
    .left-container {
        .el-submenu__title {
            line-height: 40px !important;
            height: 40px !important;
            padding-left: 60px !important;

            &:hover {
                background: rgba(85, 168, 253, 0.3) !important;
                color: #55A8FD !important;
            }
        }

        .el-menu-item-group {
            >div {
                display: none !important;
            }

            ul li {
                padding: 0px !important;

                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                    padding-left: 65px !important;

                }

            }

            .el-menu-item {
                line-height: 40px !important;
                height: 40px !important;

                &:hover {
                    background: rgba(85, 168, 253, 0.3) !important;
                    color: #55A8FD !important;
                }

                a:hover {
                    color: #55A8FD !important;
                }
            }

            .router-link-exact-active {
                // background: rgba(85, 168, 253, 0.3) !important;
                color: #55A8FD !important;
            }

        }

        .el-submenu__icon-arrow {
            &::before {
                /*position: relative;*/
                /*left: 10px;*/
                color: #fff;
            }
        }
    }

</style>
