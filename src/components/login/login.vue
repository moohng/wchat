<template lang="pug">
    .login
        h3 使用账号和密码登录
        form
            .wrap
                w-input(name="账号", placeholder="请填写用户名", type="text", v-model="username")
                w-input(name="密码", placeholder="请填写密码", type="password", v-model="password")
            .wrap
                // 阻止表单默认行为
                w-button(name="登录", :disabled="loginDisbled", type="submit",
                @click.native.prevent="login")
        .wrap
            a.tip 登录遇到问题?
</template>

<script>
import WInput from './w-input'
import WButton from './w-button'

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
            this.$loading('登录中...')
            setTimeout(() => {
                this.$close()
                // 跳转
                this.$router.replace({
                    name: 'message',
                    // 假装传递用户信息
                    params: {
                        username: this.username,
                        password: this.password
                    },
                    query: {
                        mode: 'modal'
                    }
                })
            }, 1000)
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

.login {
    @include abs(0, 0, 0, 0)
    padding: 64px 18px 0;

    background-color: #efefef;

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
