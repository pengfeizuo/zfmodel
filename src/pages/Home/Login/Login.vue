<template>
<div class="login-box">
    <div class="active1right" v-if="!islogin">
        <span class="ygjj">登录统一管理认证平台</span>
        <div class="input-zh">
            <img :src="PicInputZhBg" alt />
            <input type="text" placeholder="请输入用户名" @focus="ChangeStyle3" @blur="ClearStyle3" v-model="ruleForm.username" @keyup.enter="login" />
            <span class="code-tip" v-if="isName">用户名不能为空</span>
        </div>
        <div class="input-mm">
            <img :src="PicInputMmBg" alt />
            <input type="password" placeholder="请输入密码" @focus="ChangeStyle2" @blur="ClearStyle2" v-model="ruleForm.passworld" @keyup.enter="login" />
            <span class="code-tip" v-if="isPassWord===1">密码不能为空</span>
            <span class="code-tip" v-if="isPassWord===2">密码需由数字字母组成</span>
        </div>
        <div class="input-yzmd">
            <img :src="PicInputYzmBg" alt />
            <input type="text" placeholder="请输入图形验证码" class="input-yzm" @focus="ChangeStyle1" @blur="ClearStyle1" v-model="ruleForm.code" @keyup.enter="login" />
            <span class="code-tip" v-if="iscodeTrue===1">请输入验证码</span>
            <span class="code-tip" v-if="iscodeTrue===2">验证码需为四位数字</span>
            <span class="code-tip" v-if="iscodeTrue===3">验证码有误，请重新输入</span>
        </div>
        <span @click="refreshCode">
            <Sidentify :identifyCode="identifyCode"></Sidentify>
        </span>
        <button class="sw-bt" @click="login">登录</button>
    </div>
    <div v-else class="login-after">
        <div>
            <img :src="baseUrl+personalDetail.avatar" alt="">
        </div>
        <h1>{{personalDetail.realName}}</h1>
        <span>最近登陆:{{nowTime}}</span>
        <el-button type="goback" @click="loginout">退出登陆</el-button>
    </div>
</div>
</template>

<script>
import Sidentify from "./identify.vue";

export default {
    components: {
        Sidentify,
    },
    data() {
        return {
            isPassWord: 0,
            isName: false,
            nowTime: "",
            personalDetail: {
                avatar: "",
                realName: "",
            },
            islogin: "",
            //判断验证码是否正确
            iscodeTrue: 0,
            ruleForm: {
                username: "",
                passworld: "",
                code: "",
            },
            identifyCode: "",
            identifyCodes: "1234567890",
            PicInputZhBg: require("@/assets/image/zhanghu1.png"),
            PicInputMmBg: require("@/assets/image/mima1.png"),
            PicInputYzmBg: require("@/assets/image/yanzhengma1.png"),
        };
    },
    mounted() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    created() {
        let newstr = sessionStorage.getItem("personal_detail")
        let lew = JSON.parse(newstr)
        this.personalDetail = lew
        this.islogin = sessionStorage.getItem("set_username")
        this.getTime()
        //回车事件
        // let g = this
        // document.onkeydown = function (e) {
        //     let key = window.event.keyCode;
        //     if (key == 13) {
        //         g.login()
        //     }
        // }
    },
    computed: {
        baseUrl() {
            return this.$store.state.fileIp;
        },
    },
    methods: {
        loginout() {
            this.islogin = false;
            this.Api.personalgoback().then(res => {
                // console.log(res, "denglu")
                if (res) {
                    // console.log(res, "退出登陆")
                    this.$message.success(res.message);
                    sessionStorage.removeItem("Login_token")
                    sessionStorage.removeItem("set_username")
                }
            })
            this.ruleForm = {}

        },
        getTime() {
            this.nowTime = new Date().toLocaleString();
        },
        login() {
            let uptrue = /([0-9]{4})/;
            let res = uptrue.test(this.ruleForm.code)
            if (res && this.ruleForm.code !== this.identifyCode) {
                this.iscodeTrue = 3;
            }
            if (this.ruleForm.code.length == 0) {
                this.iscodeTrue = 1;
            }
            if (this.ruleForm.username.length == 0) {
                this.isName = true;
            }
            if (this.ruleForm.passworld.length <= 0) {
                this.isPassWord = 1;
            }
            const pass = this.$md5(this.ruleForm.passworld);
            if (this.ruleForm.username.length > 0 && this.ruleForm.passworld.length > 0 && this.ruleForm.code === this.identifyCode) {
                this.Api.login({
                    loginName: this.ruleForm.username,
                    password: pass,
                }).then((res) => {
                    console.log(res, "login");
                    if (res) {
                        if (res.code === "405") {
                            this.$message.error(res.message);
                        }
                        if (res.code === "0") {
                            sessionStorage.setItem("set_username", "true");
                            this.islogin = sessionStorage.getItem("set_username");
                            sessionStorage.setItem("Login_token", res.data);
                            // console.log(res, "token")
                            let token = res.data
                            // console.log(res, "登陆成功")
                            this.Api.personal().then((res) => {
                                // console.log(res, "个人信息");
                                // avatar: "group1/M00/00/0A/wKgCIl83TiyAYzWWAAL-mHZGb8g128.jpg"
                                // email: "lisi@163.com"
                                // loginName: "chenyuchao"
                                // orgPath: "集团总部11/集团部门2/岗位2-2"
                                // phone: "1300000000"
                                // realName: "陈宇超"
                                // roleInfo: "超级管理员"
                                if (res) {
                                    let str = JSON.stringify(res.data);
                                    sessionStorage.setItem("personal_detail", str)
                                    let newstr = sessionStorage.getItem("personal_detail")
                                    let lew = JSON.parse(newstr)
                                    this.personalDetail = lew
                                    // console.log(this.personalDetail, "this.personalDetail")
                                    // window.location.href = 'http://192.168.2.33:9000';
                                    // window.open('http://192.168.2.33:9000?token=jhkhnjjklkk', '_blank')
                                   // window.open(`${getCMSUrl()}?token=${token}`, '_blank')
                                }
                            });
                        }
                    } else {
                        this.$message.error("用户名或密码错误");
                    }
                });
            }
        },
        publicDialog(type) {
            this.dialogVisible = true;
        },
        // 生成随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        // 生成四位随机验证码
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ];
            }
            console.log(this.identifyCode);
        },
        // 切换验证码
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        //绑定回车事件
        enterSubmit(ev) {
            var keyCode = ev.keyCode || ev.which;
            if (keyCode == 13) {
                this.ValidForm();
            }
        },
        ValidForm(loginType) {
            this.$refs["loginForm"].validate((valid) => {
                if (valid) {
                    this.$router.push({
                        name: "Result",
                    });
                }
            });
            // console.log(this.identifyCode)
            // console.log(this.loginForm.password)
            // if(this.identifyCode==this.loginForm.sidentify){
            //   this.$router.push({name:"Result"});
            // }
        },
        //输入框获取焦点事件
        ChangeStyle3(e) {
            // this.$refs.InputUserName.className="focus-border-color"
            // e.target.className="focus-border-color"
            e.target.className = "focus-border-color";
            this.isName = false;
        },
        ClearStyle3(e) {
            // console.log(e.target.value.length, "e.target.value")

            if (this.ruleForm.username.length == 0) {
                this.isName = true;
            } else {
                this.isName = false;
                e.target.className = "";
            }

        },
        //输入框获取焦点事件
        ChangeStyle2(e) {
            // this.$refs.InputUserName.className="focus-border-color"
            // e.target.className="focus-border-color"
            e.target.className = "focus-border-color";
            this.isPassWord = 0;
        },
        ClearStyle2(e) {
            // let uptrue = /^\w+$/;
            // let res = uptrue.test(e.target.value)
            // console.log(res, "shurukaung")
            // console.log(e.target.value, "e.target.value")
            if (this.ruleForm.passworld.length <= 0) {
                this.isPassWord = 1;
            } else {
                this.isPassWord = 0;
                e.target.className = "focus-border-color";
            }

        },
        //输入框获取焦点事件
        ChangeStyle1(e) {
            // this.$refs.InputUserName.className="focus-border-color"   this.ruleForm.code !== this.identifyCode 
            // e.target.className="focus-border-color"
            e.target.className = "focus-border-color";
            this.iscodeTrue = 0;
        },
        ClearStyle1(e) {
            let uptrue = /([0-9]{4})/;
            let res = uptrue.test(this.ruleForm.code)
            e.target.className = "";
            if (this.ruleForm.passworld.length > 0 && this.ruleForm.username.length > 0) {
                if (this.ruleForm.code.length <= 0) {
                    this.iscodeTrue = 1;
                    e.target.className = "focus-border-color";
                } else if (res && this.ruleForm.code !== this.identifyCode) {
                    // console.log("budui ");
                    this.iscodeTrue = 3;
                    e.target.className = "focus-border-color";
                } else if (!res) {
                    this.iscodeTrue = 2;
                    e.target.className = "focus-border-color";
                } else {
                    this.iscodeTrue = 0;
                    e.target.className = "";
                }
            }

        },
    },
};
</script>

<style lang="less" scoped>
.active1right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 13px;
    height: 100%;
    position: relative;
}

.active1right .input-yzmd>input {
    width: 228px;
    height: 42px;
    border-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 1);
}

.active1right img {
    width: 14.21px;
    height: 14.21px;
    position: absolute;
    top: 14px;
    left: 7px;
}

.s-canvas {
    width: 84px;
    position: absolute;
    right: 0px;
    bottom: 80px;
}

.ygjj {
    text-align: center;
    width: 349px;
    border-bottom: solid 2px #bb0005;
    font-size: 20px;
    line-height: 50px;
    font-weight: 600;
    color: rgba(221, 33, 38, 1);
}

input {
    height: 42px;
    width: 323px;
    height: 42px;
    border-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 1);
    padding-left: 26px;
    outline: none;
}

.input-zh {
    position: relative;

    .code-tip {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 59, 48, 1);
        line-height: 20px;
        position: absolute;
        left: 0;
        top: 42px;
    }
}

.input-mm {
    position: relative;

    .code-tip {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 59, 48, 1);
        line-height: 20px;
        position: absolute;
        left: 0;
        top: 42px;
    }
}

.input-yzmd {
    position: relative;

    .code-tip {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 59, 48, 1);
        line-height: 20px;
        position: absolute;
        left: 0;
        top: 46px;
    }
}

.sw-bt {
    height: 42px;
    background-color: #dd2126;
    color: white;
    border: 0px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
}

.login_code {
    border-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 1);
}

.login_code .login_code_focus {
    border-radius: 3px;
    border: 1px solid rgba(221, 33, 38, 1);
}

.focus-border-color {
    border: 1px solid rgba(221, 33, 38, 1) !important;
}

.login-box {
    width: 100%;

    .login-after {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px 0 0 0;

        h1 {
            font-size: 20px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 1);
            line-height: 28px;
            text-align: center;
            margin-top: 15px;
            margin-bottom: 28px;
        }

        span {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 22px;
            margin-bottom: 36px;
        }

        img {
            width: 82px;
            height: 82px;
            object-fit: cover;
            border-radius: 50%;
        }

        /deep/.el-button--goback {
            width: 296px;
            height: 38px;
            background: rgba(255, 255, 255, 1);
            border-radius: 3px;
            border: 1px solid rgba(221, 33, 38, 1);
            padding: 0;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(221, 33, 38, 1);
            line-height: 22px;
        }
    }
}
</style>
