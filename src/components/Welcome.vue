<template>
    <div class="welcome-container">
        <!-- 第一行 -->
        <div class="row1">
            <div>
                <div class="title">
                    有效期: 2019-10-12
                </div>
                <div class="img test">
                    <img src="../../src/assets/img/welcome/orangePlus.png" alt="">
                </div>
                <div class="plus-btn btn">Plus会员费</div>
                <div class="ins">（¥298/年，¥498/3年，享受本系）</div>
            </div>
            <div>
                <div class="title">
                    未配置
                </div>
                <div class="img">
                    <img src="../../src/assets/img/welcome/blueIe.png" alt="">
                </div>
                <div class="blue-btn btn">配置独立域名，品牌</div>
                <div class="ins">（¥988一次性实施费，无需每年续费）</div>
            </div>
            <div>
                <div class="title">
                    同时直播数：30并发
                </div>
                <div class="img">
                    <img src="../../src/assets/img/welcome/greenClass.png" alt="">
                </div>
                <div class="green-btn btn">大班课直播</div>
                <div class="ins">（¥35/月/并发，10并发起售。讲师直播为主学生可举手发言）</div>
            </div>
        </div>
        <div class="row2">
            <div>
                <div class="title">
                    剩余：89088播点
                </div>
                <div class="img">
                    <img src="../../src/assets/img/welcome/redShow.png" alt="">
                </div>
                <div class="red-btn btn">小班课1v1直播</div>
                <div class="ins">（¥10/100播点，5播点/师生/小时。全视频直播授课）</div>
            </div>
            <div>
                <div class="title">
                    剩余：98/1000G
                </div>
                <div class="img">
                    <img src="../../src/assets/img/welcome/orangeRedis.png" alt="">
                </div>
                <div class="plus-btn btn">点播缓存</div>
                <div class="ins">（¥10/20G/月，直播回放，点播课程存储空间）</div>
            </div>
            <div>
                <div class="title">
                    剩余100G
                </div>
                <div class="img">
                    <img src="../../src/assets/img/welcome/blueFlow.png" alt="">
                </div>
                <div class="blue-btn btn">点播流量</div>
                <div class="ins">（¥10/50G流量，直播回放，点播课程播放流量费含CDN费用）</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {

        }
    }

</script>
<style lang="less" scoped>
    @import url('../../src/assets/less/Mixins.less');

    .welcome-container {
        .test {
            /*background:  url('../../src/assets/img/welcome/orangePlus.png')  center no-repeat;*/
        }

        .row1,
        .row2 {
            .flex(row, space-between, center, nowrap);

            >div {
                text-align: center;
                width: 33.333%;
                margin-right: 20px;
                background: #ffffff;
                margin-top: 20px;
                height: 310px;

                &:last-child {
                    margin-right: 0px;
                }
            }

            .ins {
                margin-top: 26px;
            }
        }


        .title {
            height: 50px;
            line-height: 50px;
            text-align: left;
            padding-left: 26px;
        }

        .img {
            text-align: center;

            img {
                height: 140px;
            }

            /*height: 140px;*/
            /*background-size: 100%;*/

        }

        .btn {
            height: 34px;
            line-height: 34px;
            border-radius: 4px;
            margin: auto;
        }

        .plus-btn {
            width: 154px;
            background: rgba(250, 167, 68, 0.061799999999999994);
            color: #F9A03B;
        }

        .blue-btn {
            width: 184px;
            background: rgba(40, 136, 250, 0.0962);
            color: #2887FA
        }

        .green-btn {
            width: 154px;
            background: rgba(10, 196, 154, 0.061799999999999994);
            color: #0AC49A;
        }

        .red-btn {
            width: 154px;
            background: rgba(230, 68, 64, 0.061799999999999994);
            color: #E64641;
        }

    }

</style>
