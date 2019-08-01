<template>
   <div class="warn-contain">
       <div class="left">
           <img src="../../src/assets/img/welcome/light.png" alt="" class="light">
           <span>购买Plus会员费, 配置独立域名, 直播, 点播产品+微信: <span>my2002n</span></span>
       </div>
       <div class="right">北京美蝶软件有限公司</div>
   </div>
</template>

<script>
    export default {
        name: 'Warn',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {

        },
        props: {
            company: {
                type: String,
                default: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .warn-contain {
        color: #7D5205;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        font-size: 14px;
        text-align: left;
        .light {
            width: 16px;
            height: 18px;
            padding: 0px 18px;
        }
        height:40px;
        line-height: 40px;
        background:rgba(254,234,202,1);
        border-radius:4px;
        opacity:0.7606;
        margin-top: 20px;
        .left{
            float: left;
            width: calc(100% - 200px);
        }
        .right{
            float: right;
            width: 200px;
        }
    }

</style>
