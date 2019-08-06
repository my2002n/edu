<template>
    <div class='home-container'>
        <SideNav></SideNav>
        <div class="right-container largeList">
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="search-contain">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="选择日期">
                            <el-date-picker v-model="dateValue" type="daterange" start-placeholder="开始日期"
                                class="date-range-large" end-placeholder="结束日期"
                                :default-time="['00:00:00', '23:59:59']">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="班级">
                            <el-input v-model="formInline.user" placeholder="请输入班级" class="class-input"></el-input>
                        </el-form-item>
                        <el-form-item label="课程名称">
                            <el-select v-model="formInline.region" placeholder="课程名称" class="class-input">
                                <el-option label="数学" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>

                        </el-form-item>
                        <el-form-item label="状态">
                            <el-select v-model="formInline.region" placeholder="全部" class="status-input">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>

                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="content-contain">
                    <el-table :data="tableData" style="width: 100%"
                        :header-cell-style="{background:'#EFF1F6',color:'#1C1C1C'}">
                        <el-table-column label="开课时间" prop="id" width="160px">
                        </el-table-column>
                        <el-table-column label="班级" prop="name" width="120px">
                        </el-table-column>
                        <el-table-column label="课程名称" prop="desc">
                        </el-table-column>
                        <el-table-column label="讲师" prop="desc">
                        </el-table-column>
                        <el-table-column label="助教" prop="desc">
                        </el-table-column>
                        <el-table-column label="课程回放" prop="back" width="100px">
                            <template slot-scope="scope">
                                <el-button type="text" size="small">
                                    {{scope.row.back}}
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态" prop="status" width="100px">
                        </el-table-column>
                        <el-table-column label="操作" width="180px">
                            <template slot-scope="scope">
                                <span class="operate">
                                    <img src="../../src/assets/img/welcome/edit.png" alt="">
                                </span>
                                <span class="operate">
                                    <img src="../../src/assets/img/welcome/add.png" alt="">
                                </span>
                                <span class="operate">
                                    <img src="../../src/assets/img/welcome/book.png" alt="">
                                </span>
                                <span class="operate delete-icon">
                                    <img src="../../src/assets/img/welcome/delete.png" alt="">
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="footer-contain">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :page-sizes="[100, 200, 300, 400]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="400">
                    </el-pagination>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
    import SideNav from '../../src/components/SideNav';
    import Header from '../../src/components/Header';
    export default {
        components: {
            SideNav,
            Header
        },
        data() {
            return {
                dateValue: "",
                headerList: ['直播', '直播大班课', '大班课列表'],
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    id: '2019-09-26 12:30',
                    name: '暑期提高加速班',
                    category: '江浙小吃、小吃零食',
                    desc: '数学',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    status: '开课中',
                    back: '回放'
                }, {
                    id: '2019-09-26 12:30',
                    name: '暑期提高加速班',
                    category: '江浙小吃、小吃零食',
                    desc: '数学',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    status: '开课中',
                    back: '回放'
                }, {
                    id: '2019-09-26 12:30',
                    name: '暑期提高加速班',
                    category: '江浙小吃、小吃零食',
                    desc: '数学',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    status: '开课中',
                    back: '回放'
                }, {
                    id: '2019-09-26 12:30',
                    name: '数学',
                    category: '江浙小吃、小吃零食',
                    desc: '数学',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    status: '开课中',
                    back: '回放'
                }],
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                },
                handleEdit(index, row) {
                    console.log(index, row);
                },
                handleDelete(index, row) {
                    console.log(index, row);
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
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

    .operate {
        cursor: pointer;
        margin-right: 20px;

        img {
            width: 14px;
            height: 14px;
        }

        // .delete-icon {}
    }

</style>
<style lang="less">
    .date-range-large {
        width: 224px !important;
    }

    .status-input {
        width: 84px !important;
    }

    .teacher-input {
        width: 100px !important;
    }

    .class-input {
        width: 150px !important;
    }

    .el-table {
        border: 1px solid rgba(223, 230, 236, 1) !important;
    }

    .el-table__header-wrapper {
        height: 40px !important;
        background: rgba(239, 241, 246, 1) !important;
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

        .el-table__expanded-cell {
            padding-left: 60px !important;
        }
    }


    .static-input {
        width: 150px !important;
        height: 40px !important;
    }

    .largeList {
        .el-form-item__content {
            margin-right: 0px !important;
        }

        .el-table th:first-child>.cell:first-child {
            /*padding-left: 20px!important;*/

        }

        .el-table__body-wrapper tr:first-child>.cell:first-child {
            /*padding-left: 20px!important;*/
        }
    }

</style>
