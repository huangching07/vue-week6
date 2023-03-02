<template>
    這是登入頁面
    <form id="form" class="form-signin">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" placeholder="name@example.com" required autofocus v-model="user.username">
            <label for="username">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password" required v-model="user.password">
            <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" v-on:click.prevent="login">登入</button>
    </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          alert(res.data.message)
          const { token, expired } = res.data // 取得登入成功之後產生的token跟expired
          document.cookie = `hexschool=${token}; expires=${new Date(expired)}` // 儲存token
          this.$router.push('/admin/products') // 跳轉到後台
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
