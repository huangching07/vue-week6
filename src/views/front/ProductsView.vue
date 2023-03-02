<template>
    這是產品列表頁面
    <table class="table">
        <thead>
            <tr>
                <th>產品名稱</th>
                <th>產品圖片</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.title }}</td>
                <td><img :src="product.imageUrl" width="150" alt=""></td>
                <td>
                    <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary">產品細節</RouterLink>
                    <button class="btn btn-outline-primary" @click="addToCart(product.id)">加入購物車</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    addToCart (productId, qty = 1) {
      const data = {
        product_id: productId,
        qty
      }
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
