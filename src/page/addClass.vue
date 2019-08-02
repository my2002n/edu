<template>
    <div class='home-container'>
        <SideNav></SideNav>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="班级名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="学科">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="讲师">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                            </el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;">
                            </el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="助教">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="开课时间">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="结束时间">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
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
                headerList: ['会员', '欢迎', '欢迎页'],
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

</style>
<style lang="less">
    .left-container {
        ul {
            background-color: #22345E
        }
    }

</style>
