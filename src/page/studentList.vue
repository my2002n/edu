<template>
    <div class='home-container'>
        <SideNav :openeds="openeds"></SideNav>
        <div class="right-container">
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="search-contain">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="手机号码">
                            <el-input v-model="formInline.user" placeholder="手机号码" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="formInline.user" placeholder="姓名" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="班级">
                            <el-select v-model="formInline.region" placeholder="全部" class="static-input">
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
                        :header-cell-style="{background:'#EFF1F6',color:'#1C1C1C'}" stripe
                              :row-key='getRowKeys'
                              :expand-row-keys="expands"
                              @expand-change="expandSelect">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                    <!-- 第一行 -->
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/time.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyBook.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyPerson.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyPerson.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <!-- 第二行 -->
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/time.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyBook.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyPerson.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyPerson.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <!-- 第三行 -->
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/time.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyBook.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyPerson.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div class="grid-content bg-purple">
                                                <span>
                                                    <img src="../../src/assets/img/welcome/greyPerson.png" alt="">
                                                </span>
                                                {{ props.row.name }}
                                            </div>
                                        </el-col>
                                    </el-row>
                                </el-form>
                            </template>
                        </el-table-column>
                        <el-table-column label="手机号码" prop="id" width="160px">
                        </el-table-column>
                        <el-table-column label="姓名" prop="name" width="140px">
                        </el-table-column>
                        <el-table-column label="出生日期" prop="desc" width="140px">
                        </el-table-column>
                        <el-table-column label="性别" prop="sex" width="80px">
                        </el-table-column>
                        <el-table-column label="备注" prop="category">
                        </el-table-column>
                        <el-table-column label="操作" width="140px">
                            <template slot-scope="scope">
                                <span class="operate" title="编辑">
                                    <img src="../../src/assets/img/welcome/edit.png" alt="">
                                </span>
                                <span class="operate"  title="添加">
                                    <img src="../../src/assets/img/welcome/add.png" alt="">
                                </span>
                                <span class="operate" title="班级">
                                    <img src="../../src/assets/img/welcome/book.png" alt="">
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
    import SideNav from '../../src/components/SideNav';
    import Header from '../../src/components/Header';
    export default {
        components: {
            SideNav,
            Header
        },
        data() {
            return {
                headerList: ['会员', '学生', '学生列表'],
                openeds: ['2', '2-2'],
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    id: '15694267318',
                    name: '张夏利',
                    category: '这是今天报名的学生',
                    desc: '1994-08-23',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    sex: '女'
                }, {
                    id: '15694267315',
                    name: '小红',
                    category: '这个孩子是第一次学习课程需要盯着',
                    desc: '1994-08-24',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    sex: '女'
                }, {
                    id: '15694267316',
                    name: '王小五',
                    category: '他还没有交学分费，要下次重新过一下',
                    desc: '1994-08-23',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    sex: '女'
                }],
                expands: [],

            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
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
            },
            getRowKeys:function(row){
                return row.id
            },
            expandSelect:function(row, expandedRows) {
                var that = this
                if (expandedRows.length) {
                    that.expands = []
                    if (row) {
                        that.expands.push(row.id)
                    }
                }
                else {
                    that.expands = []
                }
            },
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

    .bg-purple {
        img {
            width: 16px;
            height: 16px;
        }
    }

</style>
<style lang="less">
    .el-table {
        border: 1px solid rgba(223, 230, 236, 1) !important;
        border-bottom: none!important;
        .expanded td{
            box-shadow:0px 2px 0px 0px rgba(244,244,244,1)!important;
            z-index: 1!important;
            position: relative!important;
            /*border-bottom: none;*/
        }
        .expanded{
            box-shadow:0px 2px 0px 0px rgba(244,244,244,1)!important
        }
    }

    .el-table__header-wrapper {
        height: 40px !important;

        .el-table__header {
            td {
                padding: 8px 0px !important;

            }
        }

        background: rgba(239, 241, 246, 1) !important;
    }

    .el-table__header tr,
    .el-table__header th {
        padding: 0 !important;
        height: 40px !important;
    }
    .el-table tbody .el-table__row:hover>td {
        background:rgba(85, 168, 253, 0.05) !important
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
            tr{
                &:hover{
                    /*background:rgba(85,168,253,0.05)!important;*/
                }
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

    .el-form-item__content {
        margin-right: 0px !important;
    }


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
                width:29px!important;
                height:28px!important;
                border: solid 1px #409EFF !important;
            }
            li{
                border-radius: 0px !important;
            }
        }

        .btn-prev,
        .btn-next {
            margin: 0px !important;
            background: #ffffff !important;
            border: 1px solid rgba(209, 219, 229, 1);

        }
        .btn-prev{
            border-top-right-radius: 0px!important;
            border-bottom-right-radius: 0px!important;
        }
        .btn-next{
            border-top-left-radius: 0px!important;
            border-bottom-left-radius: 0px!important;
        }


        .btn-next {
            border-left: none;
        }
    }
    // 下拉选
    .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
        background-color:#55A8FD !important;
        color: #FFFFFF !important;
    }
    .el-select-dropdown__list {
        padding-top: 0px!important;
        padding-bottom: 0px!important;
    }
    .popper__arrow {
        display: none!important;
    }

</style>
