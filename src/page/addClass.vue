<template>
    <div class='home-container'>
        <SideNav></SideNav>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="add-title">
                    <img src="../../src/assets/img/welcome/add.png" alt="">
                    <span>新增班级</span>
                </div>
                <div class="add-form-container">
                    <el-form ref="form" :model="form" label-width="80px" class="add-form">
                        <el-form-item label="班级名称">
                            <el-input v-model="form.name" placeholder="请填写班级名称"></el-input>
                        </el-form-item>
                        <el-form-item label="学科">
                            <el-select v-model="form.region" placeholder="请选择">
                                <el-option label="数学" value="shanghai"></el-option>
                                <el-option label="语文" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="讲师">
                            <el-col>
                                <el-select v-model="form.region" placeholder="请选择">
                                    <el-option label="小名" value="shanghai"></el-option>
                                    <el-option label="小王" value="beijing"></el-option>
                                </el-select>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="助教">
                            <el-select v-model="form.region" placeholder="请选择">
                                <el-option label="小名" value="shanghai"></el-option>
                                <el-option label="小王" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="开课时间">
                            <el-col :span="11">
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                        style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line date-line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-time-picker placeholder="选择时间" style="width: 100%;">
                                    </el-time-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="结束时间">
                            <el-col :span="11">
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                        style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line date-line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;">
                                    </el-time-picker>
                                </el-form-item>
                            </el-col>
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
                headerList: ['会员', '班级', '新增班级'],
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
