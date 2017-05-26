<template lang="pug">
    .login
        router-link.register(:to="{name: 'register', query: {mode: 'turn'}}", replace) 注册
        h3 使用账号和密码登录
        form
            .wrap
                w-input(name="账号", placeholder="请填写用户名", type="username", v-model="username")
                w-input(name="密码", placeholder="请填写密码", type="password", v-model="password")
            .wrap
                //- 阻止表单默认行为
                w-button(name="登录", :disabled="disabled", type="submit",
                @click.native.prevent="login")
        .wrap
            a.tip 登录遇到问题?
</template>

<script>
import WInput from './w-input'
import WButton from './w-button'

import ws from '@/websocket'

export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        disabled () {

            return this.username.length === 0 || this.password.length === 0
        }
    },
    methods: {
        login () {

            this.$loading('登录中...')
            // 登录
            this.$login({
                username: this.username,
                password: this.password
            }, (err) => {

                this.$close()
                if (err) {
                    console.log(err)
                    return
                }

                // 跳转
                this.$router.replace({
                    name: 'message',
                    query: {
                        mode: 'modal'
                    }
                })

                // 连接socket
                this.$connect(err => {
                    if (err) {
                        // 连接失败
                        console.log('连接失败')
                    }
                    else {
                        // 连接成功
                        console.log('连接成功')
                    }
                })

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

    a {
        color: #00729f;
    }
    .register {
        position: absolute;
        top: 32px;
        right: 28px;
    }
    .tip {
        margin-top: 18px;

        font-size: 12px;
    }
}
</style>
