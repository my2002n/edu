<template>
    <div class='home-container'>
        <SideNav :openeds="openeds"></SideNav>
        <div class="right-container">
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                <div class="search-contain">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="学科">
                            <el-input v-model="formInline.user" placeholder="学科" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input v-model="formInline.user" placeholder="关键字" class="static-input">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="content-contain">
                    <el-table :data="tableData" style="width: 100%"
                        :header-cell-style="{background:'#EFF1F6',color:'#1C1C1C'}" stripe>
                        <el-table-column label="学科" prop="id">
                        </el-table-column>
                        <el-table-column label="备注" prop="name">
                        </el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope" title="编辑">
                                <span class="operate">
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
    import SideNav from '../../src/components/SideNav';
    import Header from '../../src/components/Header';
    export default {
        components: {
            SideNav,
            Header
        },
        data() {
            return {
                headerList: ['会员', '学科', '学科列表'],
                openeds: ['4', '4-2'],
                formInline: {
                    user: '',
                    region: ''
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

    .el-form-item__content {
        margin-right: 20px
    }

</style>
