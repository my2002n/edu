<template>
    <div class="login">
        <div class="dc-login-content">
            <div class="title">
                <div class="main">
                    <router-link to="/"></router-link>
                </div>
                <div class="info">
                    您好，欢迎登录数据科学云！
                </div>
            </div>

            <div class="login-form">
<!--                <dc-tab :tabs="tabs" @clickTab="handleClickTab" justify="center" class="dc-tab-in-login distance-32" :padding="30" />-->
                <div class="account distance" v-if="loginMode === 'account'">
                    <input @blur="hideErrorTip" class="dc-input-big distance" v-model="accountName" type="text" placeholder="请输入用户名" @keyup.enter="loginByAccount" />
                    <input @blur="hideErrorTip" class="dc-input-big distance" v-model="accountPassword" type="password" placeholder="请输入密码" @keyup.enter="loginByAccount" />
                    <div class="options little-distance">
                        <!-- <span></span> -->
                        <router-link to="/repassword">忘记密码？</router-link>
                    </div>
                    <div class="dc-error-tip little-distance" v-if="errorTip">
                        {{ errorTip }}
                    </div>
                    <div v-else class="space"></div>
                    <button @click="loginByAccount" class="dc-button-big primary">
                        立即登录
                    </button>
                </div>

                <div class="phone distance" v-if="loginMode === 'phone'">
                    <div class="options little-distance">
                        <!-- <span></span> -->
                      <router-link to="/repassword">忘记密码？</router-link>
                    </div>
                    <div class="dc-error-tip little-distance" v-if="errorTip">
                        {{ errorTip }}
                    </div>
                    <div v-else class="space"></div>
                    <button @click="loginByPhone" class="dc-button-big primary">
                        立即登录
                    </button>
                </div>

                <div>
                    没有账号？
                    <router-link to="/register">立即注册</router-link>
                </div>
            </div>
        </div>

        <div class="dc-login-bgcs">
            <div class="persons"></div>
            <div class="cloud-top"></div>
            <div class="cloud-bottom"></div>
        </div>
    </div>
</template>

<script>
  // import DcTab from '../../src/components/DcTab';
    export default {
        layout: 'unlogined',
        head() {
            return {
                title: ''
            };
        },
        components: {
            // DcTab
        },
        data() {
            return {
                loginMode: 'account',
                accountName: '',
                accountPassword: '',
                autoLoginStatus: false,
                errorTip: '',
                tabs: [
                    {
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

        .distance-32 {
            margin-bottom: 32px;
        }

        .space {
            height: 46px;
        }

        .dc-login-content {
            position: absolute;
            width: 400px;
            right: 30%;
            top: 50%;
            margin: -250px -200px 0 0;
            z-index: 500;


            .title {
                text-align: center;
                margin-bottom: 60px;

                .main {
                    height: 30px;
                    margin-bottom: 16px;

                    .dc-logo {
                        margin: 0 auto;
                        width: 180px;
                        height: 30px;
                    }
                }

                .info {
                    font-size: 18px;
                }
            }

            .login-form {
                width: 400px;
                height: 440px;
                padding: 40px;
                box-shadow: 0px 1px 32px 0px rgba(14, 104, 159, 0.1);
                text-align: center;
                background-color: #fff;

                .dc-tabs-center {
                    margin-bottom: 16px;
                }

                .distance {
                    margin-bottom: 24px;
                }

                .little-distance {
                    margin-bottom: 16px;
                }

                button {
                    width: 100%;
                }

                .options {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }

</style>


