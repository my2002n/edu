<template>
    <div class='home-container'>
        <SideNav :openeds="openeds" :activeTab="activeTab"></SideNav>
        <div class='right-container'>
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="search-contain">
                    <el-form :inline="true" :model="form" class="demo-form-inline">
                        <el-form-item label="学科">
                            <el-select v-model="form.region" placeholder="全部" class="status-input">
                                <el-option label="数学" value="shanghai"></el-option>
                                <el-option label="语文" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="班级">
                            <el-input v-model="form.user" placeholder="班级" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="讲师">
                            <el-input v-model="form.user" placeholder="讲师" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="助教">
                            <el-input v-model="form.user" placeholder="助教" class="static-input">
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
                        <el-table-column label="开课日期" prop="id">
                        </el-table-column>
                        <el-table-column label="结课日期" prop="name">
                        </el-table-column>
                        <el-table-column label="班级" prop="name">
                        </el-table-column>
                        <el-table-column label="学科" prop="name">
                        </el-table-column>
                        <el-table-column label="讲师" prop="name">
                        </el-table-column>
                        <el-table-column label="助教" prop="name">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <span class="operate" title="编辑">
                                    <img src="../../src/assets/img/welcome/edit.png" alt="">
                                </span>
                                <span class="operate" title="删除">
                                    <img src="../../src/assets/img/welcome/delete.png" alt="">
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
                headerList: ['会员', '班级', '班级列表'],
                openeds: ['5', '5-2'],
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
        border-bottom: none !important;
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
    // 分页样式
    .el-pagination {
        .el-pager {
            .number {
                margin: 0px !important;
                background: #ffffff !important;
                border: 1px solid rgba(209, 219, 229, 1);
                color: #546374 !important;
                font-weight: 400;
                border-left: none
            }

            li.active {
                background-color: #409EFF !important;
                color: #fff !important;
                border-radius: 0px !important;
                width: 29px !important;
                height: 28px !important;
                border: solid 1px #409EFF !important;
            }

            li {
                border-radius: 0px !important;
            }
        }

        .btn-prev,
        .btn-next {
            margin: 0px !important;
            background: #ffffff !important;
            border: 1px solid rgba(209, 219, 229, 1);

        }

        .btn-prev {
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
        }

        .btn-next {
            border-top-left-radius: 0px !important;
            border-bottom-left-radius: 0px !important;
        }


        .btn-next {
            border-left: none;
        }
    }

</style>
