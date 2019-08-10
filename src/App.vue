<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }

</script>

<style lang="less">
    body {
        margin: 0px;
        padding: 0px;
        font-size: 14px;
      // 时间样式
       .el-time-panel {
           width: 140px!important;
           .el-scrollbar:last-child{
               display: none!important;

           }
           .el-time-spinner__wrapper:first-child{
               .active {
                   &:after{
                       /*content: ':';*/
                       /*position: relative;*/
                       /*left: 26px;*/
                   }
               }
           }

           .el-time-spinner.has-seconds .el-time-spinner__wrapper{
               width: 50% !important;
           }
           .el-time-panel__footer{
               border-top: none;
               padding-bottom: 10px!important;
               text-align: center;
               .cancel{
                   width:51px;
                   height:28px;
                   border-radius:2px;
                   /*opacity:0.2;*/
                   border:1px solid rgba(72,87,106, 0.2);
                   color: #48576A;
               }
               .confirm{
                   width:51px;
                   height:28px;
                   background:rgba(85,168,253,1);
                   border-radius:2px;
                   color: white;
               }
           }
       }
    }


</style>
