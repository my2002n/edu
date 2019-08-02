<template>
    <div class="header-contain">
        <div class="left">
            <div v-for="(item, idx) in headerList">
                <span>{{item}}</span>
                <img src="../../src/assets/img/welcome/line.png" alt="" class="line">
            </div>
        </div>
        <div class="right">
            <img src="../../src/assets/img/welcome/person.png" alt="">
            <div class="name-content">
                <span>王美娜</span>
                <span class="grey-name">管理员</span>
            </div>
            <div class="out-btn">
                <img src="../../src/assets/img/welcome/arrow.png" alt="">
                <span>退出</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {

            }
        },
        methods: {

        },
        props: {
            headerList: {
                type: Array,
                default: function () {
                    return []
                }

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import url('../../src/assets/less/Mixins.less');
    @import url('../../src/assets/less/common.less');
    .out-btn {
        width: 75px;
        height: 36px;
        border-radius: 2px;
        opacity: 0.2733;
        border: 1px solid rgba(85, 168, 253, 1);
        font-size: 14px;
        color: #55A8FD
    }

    .left {
        width: calc(100% - 250px);
        text-align: left;
        float: left;
        color: #697B8C;
        span{
            position: relative;
            top: -32px;
            /*left: -8px;*/
        }
        img{
            margin-left: 20px;
        }
        div {
            display: inline-block;
            padding: 0px 10px;
        }
        .line {
            height: 80px;
        }
    }

    .right {
        text-align: left;
        width: 220px;
        /*line-height: 80px;*/
        float: right;
        padding-right: 30px;
        .flex(row, space-between, center, nowrap);
        img {
            height: 48px;
            display: inline-block;
            position: relative;
            top: 12px;
        }

        .name-content {
            width: 80px;
            display: inline-block;

            span {
                display: block;
            }

            .grey-name {
                font-size: 12px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(105, 123, 140, 1);
            }
        }
    }

</style>
