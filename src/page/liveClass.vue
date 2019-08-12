<template>
    <div class='home-container'>
        <SideNavStudent :openeds="openeds"></SideNavStudent>
        <div class='right-container'>
            <HeaderStudent class="header" :headerList="headerList"></HeaderStudent>
            <div class="right-content white-color">
                <div class="title">
                    <img src="../../src/assets/img/welcome/star.png" alt="" class='star'>
                    <span>教学机构</span>
                </div>
                <div class="content">
                    <div class="inner">
                        <div>
                            <img src="../../src/assets/img/welcome/cat.png" alt="" class="left-img">
                            <span>学小思教育</span>
                        </div>
                        <span>北京教师科技集团有限公司</span>

                    </div>
                    <div class="inner">
                        <div>
                            <img src="../../src/assets/img/welcome/redBook.png" alt="" class="left-img">
                            <span>消防证考试中心</span>
                        </div>
                        <span>上海名师科技有限公司</span>

                    </div>
                    <div class="inner">
                        <div>
                            <img src="../../src/assets/img/welcome/orangeAccount.png" alt="" class="left-img">
                            <span>会计专业培训</span>
                        </div>
                        <span>北京教师科技集团有限公司</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Warn from '../../src/components/Warn';
    import Welcome from '../../src/components/Welcome';
    import HeaderStudent from '../../src/components/HeaderStudent';
    import SideNavStudent from '../../src/components/SideNavStudent';
    export default {
        name: 'home',
        data() {
            return {
                headerList: ['在线课堂'],
                openeds: ['5', '5-2']
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
            HeaderStudent,
            SideNavStudent
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

    .right-content {
        .title {
            width: 100%;
            height: 56px;
            border-bottom: solid 2px #E8E9EA;
            line-height: 56px;

            img {
                margin-left: 24px;
                margin-right: 4px;
                position: relative;
                top: 2px;

            }

            span {
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(78, 84, 108, 1);
            }
        }

        .content {
            width: calc(100% - 52px);
            margin: auto;

            >div {
                width: 100%;
                height: 80px;
                background: #ffffff;
                box-shadow: 0px 2px 7px 0px rgba(119, 151, 178, 0.33);
                border-radius: 1px;
                margin-top: 15px;

                &:hover {
                    background: rgba(246, 252, 249, 1);
                }
            }

            .left-img {
                width: 62px;
                height: 62px;
                margin-top: 14px;
                margin-left: 20px;
            }

            .left-img+span {
                position: relative;
                top: -30px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(72, 87, 106, 1);
            }

            .inner {
                .flex(row, space-between, center, nowrap);

                >span {
                    margin-right: 22px;
                    font-size: 14px;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    color: rgba(72, 87, 106, 1);
                }
            }
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

    .star {
        width: 15px;
        height: 15px;
        background: rgba(255, 171, 43, 1);
        border-radius: 1px;
    }

</style>
