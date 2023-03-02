<template>
  <div>
    這是後台頁面
    <router-link to="/admin/products">後台產品頁面</router-link> |
    <router-link to="/admin/orders">後台訂單頁面</router-link> |
    <router-link to="/">回前台頁面</router-link> |
    <a href="#" @click.prevent="logout">登出</a>
    <hr>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `hexschool=; expires=${new Date()}` // 清除token
      this.$router.push('/login')
    },
    checkLogin () {
      this.$http.post(`${VITE_APP_URL}/api/user/check`)
        .then((res) => {
        })
        .catch((err) => {
          this.$router.push('/login') // 跳轉回登入畫面
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1') // 取得token
    this.$http.defaults.headers.common.Authorization = token // 每次發出request時都帶入token驗證身份
    this.checkLogin()
  }
}
</script>
