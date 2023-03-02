<template>
  <div>
    這是前台頁面
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">產品頁面</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/login">登入</router-link> |
    <router-link to="/admin/products">後台產品頁面</router-link>
    <hr>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>
