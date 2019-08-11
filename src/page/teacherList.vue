<template>
    <div class='home-container'>
        <SideNav :openeds="openeds"></SideNav>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="search-contain">
                    <el-form :inline="true" :model="form" class="demo-form-inline">
                        <el-form-item label="账号">
                            <el-input v-model="form.user" placeholder="账号" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="form.user" placeholder="姓名" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="form.user" placeholder="手机号码" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-input v-model="form.user" placeholder="状态" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="content-contain">
                    <el-table :data="tableData" style="width: 100%"
                        :header-cell-style="{background:'#EFF1F6',color:'#1C1C1C'}" stripe>
                        <el-table-column label="账号" prop="id">
                        </el-table-column>
                        <el-table-column label="姓名" prop="name">
                        </el-table-column>
                        <el-table-column label="邀请码" prop="name">
                        </el-table-column>
                        <el-table-column label="手机号码" prop="name">
                        </el-table-column>
                        <el-table-column label="身份" prop="name">
                        </el-table-column>
                        <el-table-column label="查看课程" prop="name">
                        </el-table-column>
                        <el-table-column label="状态" prop="name">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <span class="operate" title="编辑">
                                    <img src="../../src/assets/img/welcome/edit.png" alt="">
                                </span>
                                <span class="operate" title="添加">
                                    <img src="../../src/assets/img/welcome/add.png" alt="">
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="footer-contain">
                    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :page-sizes="[20, 50, 100, 200]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="400">
                    </el-pagination>
                    <div class='go-page'>确定</div>
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
                headerList: ['会员', '讲师', '讲师列表'],
                openeds: ['3', '3-2'],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                tableData: [{
                    id: '高三理科综合',
                    name: '这是今天报名的学生',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '高三理科综合',
                    name: '这是今天报名的学生',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '高三理科综合',
                    name: '这是今天报名的学生',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }],
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

    .search-contain {
        // margin-top: 20px;
        padding-left: 20px;
        padding-top: 24px;
    }

    .content-contain {
        // padding-left: 16px;
    }

    .right-container {
        background: #ffffff;
        height: 100%;
    }

    .operate {
        cursor: pointer;
        margin-right: 20px;

        img {
            width: 16px;
            height: 16px;
        }
    }

    .grid-content {
        span {
            position: relative;
            margin-right: 5px;
            top: 3px;
        }
    }

</style>
<style lang="less">
    .el-table {
        border: 1px solid rgba(223, 230, 236, 1) !important;
        border-bottom: none!important;
    }

    .el-table__header-wrapper {
        height: 40px !important;
        background: rgba(239, 241, 246, 1) !important;
    }

    .el-table__header tr,
    .el-table__header th {
        padding: 0 !important;
        height: 40px !important;
    }

    .el-table__body-wrapper {
        .el-row {
            margin-bottom: 16px !important;

            &:first-child {
                margin-top: 10px !important;
            }
        }

        tbody {

            .table__row,
            td {
                padding: 8px 0px !important;

            }

        }
    }


    .static-input {
        width: 150px !important;
        height: 40px !important;
    }

    /*.el-form-item__content {*/
    /*    margin-right: 20px*/
    /*}*/

</style>
