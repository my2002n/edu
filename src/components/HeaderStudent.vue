<template>
    <div class="header-contain">
        <div class="left">
            <div v-for="(item, idx) in headerList">
                <span>{{item}}</span>
                <img src="../../src/assets/img/welcome/line.png" alt="" class="line" v-if="headerList.length-1 !== idx">
                <img src="../../src/assets/img/welcome/lineLast.png" alt="" class="line" v-else>
            </div>
        </div>
        <div class="right">
            <img src="../../src/assets/img/welcome/person.png" alt="">
            <div class="name-content">
                <span>欢迎, 王美娜同学</span>
            </div>
            <div class="out-btn" @mouseenter="enter" @mouseleave="leave">
                <img src="../../src/assets/img/welcome/greyArrow.png" alt="" class='out-img' v-if="!showWhite">
                <img src="../../src/assets/img/welcome/arrowWhite.png" alt="" class='out-img' v-else>
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
                showWhite: false

            }
        },
        methods: {
            enter() {
                this.showWhite = true

            },
            leave() {
                this.showWhite = false

            }

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
        cursor: pointer;
        width: 73px;
        height: 34px;
        border-radius: 2px;
        // opacity: 0.2733;
        border: 1px solid rgba(85, 168, 253, 0.2733);
        font-size: 14px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(105, 123, 140, 1);

        &:hover {
            background: #55A8FD;
            color: #fff;
        }

        .out-img {
            width: 10px;
            height: 12px;
            position: relative;
            left: 13px;
            top: 8px;
        }

        span {
            position: relative;
            left: 13px;
            top: 7px;
        }
    }

    .left {
        width: calc(100% - 290px);
        text-align: left;
        float: left;
        color: #697B8C;

        span {
            position: relative;
            top: -32px;
            /*left: -8px;*/
        }

        img {
            margin-left: 20px;
        }

        div {
            display: inline-block;
            padding: 0px 10px;
        }

        .line {
            height: 80px;
            width: 5px;
        }
    }

    .right {
        text-align: left;
        width: 260px;
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
            width: 150px;
            position: relative;
            top: 10px;
            left: 4px;

            span {
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(105, 123, 140, 1);
                margin-left: 10px;
            }

            .grey-name {
                font-size: 12px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(105, 123, 140, 1);
                position: relative;
                top: 4px;
            }
        }

        .out-btn {
            position: relative;
            top: 13px;
        }
    }

</style>
