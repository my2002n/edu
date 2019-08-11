<template>
    <div class="login">
        <div class="login-img">
            <div class ='login-title'>
              直播课堂
            </div>
            <div class="login-ins">
                专注在线教育培训，支持直播授课，点播学习，视频互动
            </div>
            <div class="login-ins2">
                <span>//</span>
                <span>支持PC、MAC、IOS、Android、Ipad</span>
                <span>//</span>
            </div>
            <div class="login-down-content">
                <div class="login-down-left">
                    <div class="quick-code"></div>
                    <span>IOS下载</span>
                </div>
                <div class="login-down-right">
                    <div class="quick-code"></div>
                    <span>Android下载</span>
                </div>
            </div>
        </div>
        <div class="dc-login-content">
            <div class="title">
                <div class="info">
                    欢迎登录直播课堂
                </div>
            </div>

            <div class="login-form">
                <el-tabs v-model="activeName" @tab-click="handleClickTab">
                    <el-tab-pane label="老师登录" name="first">
                        <div class="account distance" >
                            <input @blur="hideErrorTip" class="dc-input-big distance" v-model="accountName" type="text"
                                   placeholder="账号:" @keyup.enter="loginByAccount" />
                            <input @blur="hideErrorTip" class="dc-input-big distance" v-model="accountPassword" type="password"
                                   placeholder="密码:" @keyup.enter="loginByAccount" />
                            <input @blur="hideErrorTip" class="dc-input-big distance sure-code-input" v-model="accountPassword" type="password"
                                   placeholder="请输入验证码:" @keyup.enter="loginByAccount" />
<!--                            <div class="options little-distance">-->
<!--                                <router-link to="/repassword">忘记密码？</router-link>-->
<!--                            </div>-->
<!--                            <span class="sure-code">此处放验证码</span>-->
                            <img src="../../src/assets/img/welcome/code.jpg" alt="" class="code-img">
                            <div class="dc-error-tip little-distance" v-if="errorTip">
                                {{ errorTip }}
                            </div>
                            <div class="space"></div>
                            <button @click="loginByAccount" class="dc-button-big primary">
                                登录
                            </button>
                            <div class="res"><router-link to="/register">教学机构注册</router-link></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="学生登录" name="second">
                        <div class="account distance" >
                            <input @blur="hideErrorTip" class="dc-input-big distance" v-model="accountName" type="text"
                                   placeholder="账号:" @keyup.enter="loginByAccount" />
                            <input @blur="hideErrorTip" class="dc-input-big distance" v-model="accountPassword" type="password"
                                   placeholder="密码:" @keyup.enter="loginByAccount" />
                            <input @blur="hideErrorTip" class="dc-input-big distance sure-code-input" v-model="accountPassword" type="password"
                                   placeholder="请输入验证码:" @keyup.enter="loginByAccount" />
                            <!--                            <div class="options little-distance">-->
                            <!--                                <router-link to="/repassword">忘记密码？</router-link>-->
                            <!--                            </div>-->
                            <img src="../../src/assets/img/welcome/code.jpg" alt="" class="code-img">
                            <div class="dc-error-tip little-distance" v-if="errorTip">
                                {{ errorTip }}
                            </div>
                            <div class="space"></div>
                            <button @click="loginByAccount" class="dc-button-big primary">
                                登录
                            </button>
                            <div class="res-contain">
                                <div class="res"><router-link to="/register">忘记密码</router-link></div>
                                <div class="res"><router-link to="/register">学生注册</router-link></div>
                            </div>

                        </div>
                    </el-tab-pane>
                </el-tabs>
                <div class="bot1">技术支持+微信：my2002n</div>
                <div class="bot2">
                    <span>北京智云科技有限公司</span>
                    <span>京ICP1213123号</span>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'unlogined',
        head() {
            return {
                title: ''
            };
        },
        components: {

        },
        data() {
            return {
                activeName: 'first',
                accountName: '',
                accountPassword: '',
                autoLoginStatus: false,
                errorTip: '',
                tabs: [{
                        name: '账号登录',
                        eng: 'account'
                    },
                    {
                        name: '手机号登录',
                        eng: 'phone'
                    }
                ]
            };
        },
        async created() {
            // await this.$store.dispatch('clearSession');
        },
        methods: {
            async loginByAccount() {
                const username = this.accountName;
                const password = this.accountPassword;

                if (username.length === 0) {
                    this.errorTip = '请输入用户名';
                    return;
                } else {
                    this.errorTip = '';
                }

                if (password.length === 0) {
                    this.errorTip = '请输入密码';
                    return;
                } else {
                    this.errorTip = '';
                }

                const loginData = await this.$user.login(username, password);
                const {
                    res,
                    flag
                } = loginData;

                if (flag) {
                    this.goToIndex();
                } else {
                    this.errorTip = res.data.msg;
                }
            },
            notification(msg) {
                this.errorTip = msg;
            },
            async loginByPhone() {
                const {
                    flag,
                    msg
                } = await this.$refs.verify.isVerified();
                if (flag) {
                    const {
                        phone
                    } = this.$refs.verify.getCodeAndPhone();
                    const phoneLoginData = await this.$user.phoneLogin(phone);
                    const {
                        flag: reqFlag,
                        res
                    } = phoneLoginData;

                    if (reqFlag) {
                        this.goToIndex();
                    } else {
                        this.errorTip = res.data.msg;
                    }
                } else {
                    this.errorTip = msg;
                }
            },
            goToIndex() {
                this.$router.push('/');
            },
            hideErrorTip() {
                if (this.accountName.length === 0 && this.accountPassword.length === 0) {
                    this.errorTip = '';
                }
            },
            handleClickTab(item) {
                this.loginMode = item.eng;
            }
        }
    };

</script>
<style lang="less" scoped>
    @import url('../../src/assets/less/Mixins.less');
    @import url('../../src/assets/less/common.less');

    .login {
        height: 100Vh;
        min-height: 800px;
        min-width: 1280px;
        display: flex;
        .login-img {
            min-width: 692px;
            width: 54%;
            float: left;
            background: url("../../src/assets/img/welcome/login.png") center no-repeat;
            height: 100%;
            background-size:120%;
            position: relative;

            img {
                width: 100%;
                min-height: 1000px;
            }
            .login-down-content{
                position: absolute;
                bottom: 38px;
                width: 300px;
                left: calc((100% - 300px) / 2);
                .quick-code{
                    width:90px;
                    height:90px;
                    background:rgba(255,255,255,1);
                    opacity:0.617;
                    margin-bottom: 5px;
                }
                .login-down-left {
                    float: left;
                    width: 50%;
                    text-align: center;
                    span{
                        position: relative;
                        right: 30px;
                    }
                }
                .login-down-right{
                    float: right;
                    width: 50%;
                    text-align: center;
                    span{
                        position: relative;
                        right: 30px;
                    }
                }
                span{
                    width:80px;
                    height:17px;
                    font-size:12px;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:17px;
                }
            }

        }
        .login-title{
            width:190px;
            height:97px;
            font-size:34px;
            font-family:FZZZHONGJW--GB1-0;
            font-weight:normal;
            color:rgba(255,255,255,1);
            line-height:145px;
            letter-spacing:5px;
            margin-left: 34px;
        }
        .login-ins {
            width:500px;
            height:28px;
            font-size:20px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:28px;
            margin: auto;
            margin-top: 44px;
        }
        .login-ins2 {
            width: 280px;
            height:20px;
            font-size:14px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
            margin: auto;
            margin-top: 18px;
            /*background: rgba(88, 129, 253, 0.3)*/
        }


        .distance-32 {
            margin-bottom: 32px;
        }

        .space {
            height: 24px;
        }

        .dc-login-content {
            width: 46%;
            float: right;
            min-width: 578px;
            position: relative;

            .info {
                height: 42px;
                font-size: 30px;
                font-family: PingFang-SC-Medium;
                font-weight: 500;
                color: rgba(85, 168, 253, 1);
                line-height: 42px;
                margin-top: 135px;
            }

            .title {
                text-align: center;
                margin-top: 135px;
                margin-bottom: -12px;

                .main {
                    height: 30px;
                    margin-bottom: 16px;

                    .dc-logo {
                        margin: 0 auto;
                        width: 180px;
                        height: 30px;
                    }
                }


            }

            .login-form {
                margin: auto;
                width: 316px;
                height: 440px;
                padding: 40px;
                /*box-shadow: 0px 1px 32px 0px rgba(14, 104, 159, 0.1);*/
                /*text-align: center;*/
                background-color: #fff;

                .dc-tabs-center {
                    margin-bottom: 16px;
                }

                .distance {
                    margin-bottom: 20px;
                }

                .little-distance {
                    margin-bottom: 16px;
                }

                button {
                    width: 314px;
                    height: 39px;
                    background: linear-gradient(167deg, rgba(103, 178, 252, 1) 0%, rgba(87, 126, 253, 1) 100%);
                    border-radius: 2px;
                    font-size: 20px;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    color: #ffffff;
                }

                .options {
                    display: flex;
                    justify-content: space-between;
                }
                input{
                    padding: 0px 10px;
                    width: 292px;
                    font-size: 14px;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    color: rgba(96,98,102,1);
                    margin-left: 1px;
                    &:first-child{
                        margin-top: 1px;
                    }
                    &:focus{
                        border:1px solid rgba(85,168,253,1);
                    }
                }
                .sure-code-input {
                    width: 183px;
                    color:rgba(170,170,170,1);
                    margin-left: 1px;
                }
                .sure-code {
                    margin-left: 14px;
                }
                .res-contain{
                    .flex(row, space-between, center, nowrap);
                }
                .res{
                    text-align: right;
                    margin-top: 22px;
                    a{
                        width:84px;
                        height:20px;
                        font-size:14px;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(85,168,253,1);
                        line-height:20px;
                        text-decoration: none;
                    }

                }
                .bot1{
                    position: absolute;
                    bottom: 48px;
                    font-size:14px;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(169,169,169,1);
                    line-height:20px;
                    text-align: center;
                    width: 314px;
                }
                .bot2{
                    position: absolute;
                    bottom: 20px;
                    font-size:14px;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(169,169,169,1);
                    line-height:20px;
                    text-align: center;
                    width: 314px;
                }
                .code-img{
                    width: 97px;
                    height: 41px;
                    float: right;
                    margin-right: 1px;
                }

            }
        }
    }

</style>
<style lang="less">
.el-tabs__nav{
    margin-left: 64px!important;
    >div{
        font-size:16px!important;
        font-family:PingFang-SC-Regular!important;
        font-weight:400!important;
        color: rgba(96,98,102,1) !important
    }
    .is-active{
        color: #55a8fd !important;
    }

}
.el-tabs__header{
    margin-bottom: 22px!important;
}
    #tab-first{
        padding-right: 30px!important;
    }
    #tab-second {
        padding-left: 30px!important;
    }

</style>
