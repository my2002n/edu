<template>
    <div class="header-contain">
        <div class="left">
            <span v-for="(item, idx) in headerList">
                {{item}}
                <!--               <img src="../../src/assets/img/welcome/line.png" alt="">-->
            </span>
        </div>
        <div class="right">
            <img src="../../src/assets/img/welcome/person.png" alt="">
            <div class="name-content">
                <span>王美娜</span>
                <span class="grey-name">管理员</span>
            </div>
            <span class="out-btn">
                退出
            </span>
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
                default: []
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
        line-height: 80px;
        width: calc(100% - 250px);
        text-align: left;
        float: left;

        span {
            padding: 0px 20px;
        }
    }

    .right {
        text-align: left;
        width: 220px;
        /*line-height: 80px;*/
        float: right;
        padding-right: 30px;

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
