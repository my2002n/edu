<template>
    <div class='left-container left-student-container'>
        <!--            <div class = 'title'>直播课堂</div>-->
        <div class="title">
            <img src="../../src/assets/img/welcome/logoText.png" alt="">
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#4E546C" text-color="#fff">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>学小思教育</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>学小思教育</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>会计专业培训</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
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
                console.log('tttttttttttt', this.openeds)
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
            img {
                width: 16px;
                height: 16px;
            }

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

    .left-student-container {
        background-color: #4E546C !important
    }

</style>
<style lang='less'>


</style>
