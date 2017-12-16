<template>
  <div class="register">
    <router-link class="login" :to="{name: 'login', query: {mode: 'turn'}}" replace>登录</router-link>
    <h2>注册新用户</h2>
    <form>
      <div class="wrap">
        <w-input name="账号" placeholder="请输入6到16位用户名" type="username" v-model="username"></w-input>
        <w-input name="密码" placeholder="请输入6到16位密码" type="password" v-model="password"></w-input>
        <w-input name="确认密码" placeholder="请再次输入密码" type="password" v-model="rePassword" :class="{error}"></w-input>
      </div>
      <div class="wrap">
        <x-button type="primary" :disabled="disabled" :show-loading="false" @click.native.prevent="register">注册</x-button>
      </div>
    </form>
  </div>
</template>

<script>
import WInput from './w-input'
import { XButton } from 'vux'

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
      } else {
        this.error = false
      }

      return (
        this.username.length === 0 ||
        this.password.length === 0 ||
        this.rePassword.length === 0
      )
    }
  },
  methods: {
    async register () {
      this.$vux.loading.show('注册用户中...')
      const res = await this.$register({
        username: this.username,
        password: this.password
      })
      // 连接socket
      await this.$connect()
      this.$vux.loading.hide()
      if (res.code === 0) {
        this.$router.replace({ name: 'message', query: { mode: 'modal' } })
      } else {
        this.$vux.toast.text(res.message, 'bottom')
      }
    }
  },
  components: {
    WInput,
    XButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.register {
  @include abs(0, 0, 0, 0);
  padding: 64px 18px 0;

  text-align: center;
  background: #efefef;

  h2 {
    margin: 20px auto;
    font-size: 22px;
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
