<template>
  <div class="login">
    <router-link class="register" :to="{name: 'register', query: {mode: 'turn'}}" replace>注册</router-link>
    <h2>使用账号和密码登录</h2>
    <form>
      <div class="wrap">
        <w-input name="账号" placeholder="请填写用户名" type="username" v-model="username"></w-input>
        <w-input name="密码" placeholder="请填写密码" type="password" v-model="password"></w-input>
      </div>
      <div class="wrap">
        <x-button type="primary" :disabled="disabled" :show-loading="false" @click.native.prevent="login">登录</x-button>
      </div>
    </form>
    <div class="wrap">
      <a href="#" class="tip">登录遇到问题?</a>
    </div>
  </div>
</template>

<script>
import WInput from './w-input'
import { XButton } from 'vux'

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
    async login () {
      this.$loading('登录中...')
      // 登录
      const res = await this.$login({
        username: this.username,
        password: this.password
      })
      if (res.code === 0) {
        // 连接socket
        await this.$connect()
        this.$hide()
        this.$router.replace({
          name: 'message',
          query: { mode: 'modal' }
        })
      } else {
        this.$toast(res.message)
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

.login {
  @include abs(0, 0, 0, 0)
  padding: 64px 18px 0;

  text-align: center;
  background-color: #efefef;

  h2 {
    margin: 20px auto;
    font-size: 22px;
    text-align: center;
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
