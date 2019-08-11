<template>
    <div class='home-container'>
        <SideNav :openeds="openeds"></SideNav>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="add-title">
                    <img src="../../src/assets/img/welcome/add.png" alt="">
                    <span>新增讲师</span>
                </div>
                <div class="add-form-container">
                    <el-form ref="form" :model="form" label-width="80px" class="add-form">
                        <el-form-item label="账号">
                            <el-input v-model="form.phone" placeholder="请输入账号">
                                <template slot="append">@13811332209</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.name" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="form.name" placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item label="身份">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="管理员"></el-radio>
                                <el-radio label="讲师"></el-radio>
                                <el-radio label="助教"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="课程权限">
                            <el-checkbox label="只看自己的课程" name="type"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-select v-model="form.region" placeholder="请选择">
                                <el-option label="已开放" value="shanghai"></el-option>
                                <el-option label="未开放" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="btn-group">
                            <el-button type="primary">确定</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Warn from '../../src/components/Warn';
    import Welcome from '../../src/components/Welcome';
    import Header from '../../src/components/Header';
    import SideNav from '../../src/components/SideNav';
    export default {
        name: 'home',
        data() {
            return {
                headerList: ['会员', '讲师', '新增讲师'],
                openeds: ['3', '3-1'],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
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
            Header,
            SideNav
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

    .add-title {
        height: 70px;
        line-height: 70px;
        padding-left: 30px;

        img {
            height: 20px;
            width: 20px;
            position: relative;
            top: 4px;
            margin-right: 12px;
        }
    }

    .add-form-container {
        width: calc(100% - 60px);
        margin: auto;
        border: 1px solid rgba(221, 223, 230, 1);

        .add-form {
            width: 500px;
            margin: auto;
            margin-top: 30px;
        }

        .el-select {
            width: 100%
        }
    }

</style>
<style lang="less">
    .left-container {
        ul {
            background-color: #22345E
        }
    }

    .btn-group {
        >div {
            text-align: center
        }
    }

    .date-line {
        text-align: center !important
    }

</style>
