<template lang="pug">
    .register
        router-link.login(:to="{name: 'login', query: {mode: 'turn'}}", replace) 登录
        h3 注册新用户
        form
            .wrap
                w-input(name="账号", placeholder="请输入6到16位用户名", type="username", v-model="username")
                w-input(name="密码", placeholder="请输入6到16位密码", type="password", v-model="password")
                w-input(name="确认密码", placeholder="请再次输入密码",
                type="password", v-model="rePassword",
                :class="{error}")
            .wrap
                w-button(name="注册", :disabled="disabled", type="submit",
                @click.native.prevent="register")
</template>

<script>
import WInput from './w-input'
import WButton from './w-button'

export default {
    name: 'register',
    data () {
        return {
            username: '',
            password: '',
            rePassword: '',

            error: false
        }
    },
    computed: {
        disabled () {

            if (this.rePassword !== this.password) {
                this.rePassword = ''
                //
                this.error = true
            }
            else {
                this.error = false
            }

            return (this.username.length === 0 ||
                   this.password.length === 0 ||
                   this.rePassword.length === 0)
        }
    },
    methods: {
        register () {
            console.log('注册用户')

            this.$loading('注册用户中...')

            this.$register({
                username: this.username,
                password: this.password
            }, (err, res) => {
                this.$close()

                if (err) {
                    console.log('注册出错')
                    return
                }

                if (res && res.status === 'success') {
                    console.log('注册成功')
                    // 连接socket
                    this.$connect(err => {
                        if (err) {
                            console.log('连接出错')
                            return
                        }
                        console.log('连接成功')
                    })

                    // 跳转
                    this.$router.replace({
                        name: 'message',
                        query: {
                            mode: 'modal'
                        }
                    })
                }
                else {
                    console.log('用户名已存在')
                }

            })
        }
    },
    components: {
        WInput,
        WButton
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.register {
    @include abs(0, 0, 0, 0)
    padding: 64px 18px 0;

    background-color: #efefef;

    h3 {
        margin: 20px auto;
    }
    .wrap {
        margin-top: 28px;
    }
    .login {
        position: absolute;
        top: 32px;
        right: 28px;

        color: #00729f;
    }
}
</style>
