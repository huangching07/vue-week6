<template>
    這是購物車頁面
    <table class="table align-middle">
        <thead>
            <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCartItem(item.id)" :disabled="loadingItem === item.id">
                            <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                            x
                        </button>
                    </td>
                    <td>
                        {{ item.product.title }}
                        <!-- <div class="text-success">已套用優惠券</div> -->
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <div class="input-group mb-3">
                                <select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)" :disabled="loadingItem === item.id">
                                    <option :value="i" v-for="i in 20" :key="`qty${i}`">{{ i }}</option>
                                </select>
                                <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                            </div>
                        </div>
                    </td>
                    <td class="text-end">
                        <!-- <small class="text-success">折扣價：</small> -->
                        {{ item.final_total }}
                    </td>
                </tr>
            </template>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      cart: {},
      qty: 1,
      loadingItem: ''
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          alert(res.data.message)
          this.getCart()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    deleteCartItem (itemId) {
      this.loadingItem = itemId
      this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${itemId}`)
        .then((response) => {
          alert(response.data.message)
          this.getCart()
          this.loadingItem = ''
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },
    deleteCart () {
      this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
