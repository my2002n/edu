<template>
    <div class='home-container'>
        <SideNav :openeds="openeds" :activeTab="activeTab"></SideNav>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="add-title">
                    <img src="../../src/assets/img/welcome/add.png" alt="">
                    <span>新增学科</span>
                </div>
                <div class="add-form-container">
                    <el-form ref="form" :model="form" label-width="80px" class="add-form">
                        <el-form-item label="学校名称">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.desc"></el-input>
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
                headerList: ['会员', '学科', '新增学科'],
                openeds: ['4', '4-1'],
                activeTab: 'Member',
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

        span {
            font-size: 20px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
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

    textarea {
        min-height: 100px !important
    }

</style>
