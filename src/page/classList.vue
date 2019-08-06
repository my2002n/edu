<template>
    <div class='home-container'>
        <SideNav></SideNav>
        <div class="right-container largeList">
            <Header class="header" :headerList="headerList"></Header>
            <div class="right-content white-color">
                敬请期待
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
            width: 16px;
            height: 16px;
        }

        // .delete-icon {}
    }

</style>
<style lang="less">
    .el-table__header tr,
    .el-table__header th {
        padding: 0 !important;
        height: 40px !important;
    }

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
                padding: 4px 0px !important;

            }

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
            padding-left: 15px !important;

        }

        .el-table__body-wrapper tr td>.cell:first-child {
            padding-left: 15px !important;
        }
    }

</style>
