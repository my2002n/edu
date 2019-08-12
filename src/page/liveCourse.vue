<template>
    <div class='home-container'>
        <SideNavStudent :openeds="openeds"></SideNavStudent>
        <div class='right-container'>
            <HeaderStudent class="header" :headerList="headerList"></HeaderStudent>
            <div class="right-content white-color">
                <div class="title">
                    <img src="../../src/assets/img/welcome/star.png" alt="" class='star'>
                    <span>数学</span>
                </div>
                <div class="content">
                    <div class="title-course">
                        <span>第三讲</span>
                        <span>奥数的秘密</span>
                        <span class='green-color'>课程回放</span>
                    </div>
                    <div class="class-name">班级名称：奥数的秘密突击一班</div>
                    <div class="class-time">开课时间：2019-11-09 12:00至2019-12-08 13:00</div>
                    <div class="class-show">
                        <div class="left-show">
                            <div class="show-text">
                                <img src="../../src/assets/img/welcome/show.png" alt="" class="show-icon">
                                <span>教学直播</span>
                            </div>
                            <img src="../../src/assets/img/welcome/studentClass.png" alt="" class="student-class">
                            <div class="ins-text">支持PC、MAC、IOS、Android、Ipad</div>
                            <div class='suggest-text'>（建议使用客户端直播，体验最好，低延时）</div>
                            <div class="down-btn">
                                <div>
                                    PC下载
                                </div>
                                <div>
                                    MAC下载
                                </div>
                            </div>
                        </div>
                        <div class="right-show">
                            <div class="show-text">
                                <img src="../../src/assets/img/welcome/pc.png" alt="" class="show-icon">
                                第一次直播，请下载最新客户端
                            </div>
                            <div class="orange-step"></div>
                            <div class="start-show">点击启动直播</div>
                            <div class="open-class">启动客户端时，请注册同意浏览器打开“云端课堂”</div>
                            <div class="click-here">如果无法使用客户端，可以<a href="">点击这里</a>使用网页版直播</div>
                        </div>
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
                openeds: ['5', '5-2'],
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
        }

        .content {
            width: calc(100% - 52px);
            margin: auto;

            .class-name,
            .class-time {
                margin-bottom: 10px;
                font-size: 14px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(78, 84, 108, 1)
            }

            .title-course {
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                font-family: PingFang-SC-Medium;
                font-weight: 500;
                color: rgba(78, 84, 108, 1);

                span {
                    margin-right: 12px
                }

                .green-color {
                    width: 81px;
                    height: 24px;
                    background: rgba(171, 240, 206, 0.34);
                    border-radius: 2px;
                    border: 1px solid rgba(83, 204, 144, 0.36);
                    color: #53CC90;
                    font-size: 14px;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    padding: 1px 12px;
                    cursor: pointer;
                }
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

            .class-show {
                width: calc(100% - 314px);
                min-width: 788px;
                height: 384px;
                background: rgba(250, 250, 250, 1);
                box-shadow: 0px -1px 16px 0px rgba(9, 74, 136, 0.14);
                border-radius: 2px;
                margin-top: 20px;

                font-size: 14px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(96, 98, 102, 1);

                .show-icon {
                    width: 15px;
                    height: 15px;
                    margin-right: 4px;
                    position: relative;
                    top: 2px;
                }

                .show-text {
                    height: 66px;
                    line-height: 66px;
                    text-align: center
                }





                .suggest-text {
                    margin-top: 15px;
                }

                .flex(row, space-between, top, nowrap);

                .left-show {
                    width: 50%;
                    text-align: center;
                    border-right: solid 2px #E8E9EA;

                    .student-class {
                        width: calc(100% - 88px);
                        height: 154px;

                    }

                    .ins-text {
                        margin-top: 20px
                    }

                    .down-btn {
                        margin-top: 20px;
                        padding: 0px 44px;

                        div {
                            width: 98px;
                            height: 35px;
                            line-height: 35px;
                            background: rgba(83, 204, 144, 1);
                            border-radius: 18px;
                            font-size: 14px;
                            font-family: PingFang-SC-Regular;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            float: left;
                        }

                        div:last-child {
                            float: right;
                            margin-right: 8px;
                        }

                        div:first-child {
                            margin-left: 8px;
                        }
                    }
                }

                .right-show {
                    width: 50%;
                    text-align: center;

                    .orange-step {
                        height: 115px;
                    }

                    .start-show {
                        width: 118px;
                        height: 34px;
                        background: rgba(83, 204, 144, 1);
                        border-radius: 17px;
                        font-size: 14px;
                        font-family: PingFang-SC-Regular;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                        text-align: center;
                        line-height: 34px;
                        margin: auto;
                        margin-bottom: 36px;
                    }

                    .open-class {
                        margin-bottom: 15px;
                    }

                    .click-here {
                        a {
                            text-decoration: none;
                            color: #409EFF;
                        }
                    }
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
