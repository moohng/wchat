<template lang="pug">
    .login
        h3 使用账号和密码登录
        .wrap
            ui-input(name="账号", placeholder="请填写用户名", type="text",
            @input="value => username = value")
            ui-input(name="密码", placeholder="请填写密码", type="password",
            @input="value => password = value")
        .wrap
            ui-button(name="登录", :disabled="loginDisbled",
            @click="login")
            p.tip 登录遇到问题?
</template>

<script>
import UiInput from './ui-input'
import UiButton from './ui-button'

export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        loginDisbled () {

            return this.username.length === 0 || this.password.length === 0
        }
    },
    methods: {
        login () {
            console.log('login')
            console.log('username: ', this.username)
            console.log('password: ', this.password)

            // 模拟登陆操作
            this.$loading('hello world!')
            setTimeout(() => {
                this.$close()
                // 跳转
                this.$router.push({name: 'message'})
            }, 1000)

        }
    },
    components: {
        UiInput,
        UiButton
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.login {
    @include abs(0, 0, 0, 0)
    padding: 64px 18px 0;

    h3 {
        margin: 20px auto;
    }

    .wrap {
        margin-top: 28px;
    }

    .tip {
        margin-top: 18px;

        color: #00729f;
        font-size: 12px;
    }
}
</style>
