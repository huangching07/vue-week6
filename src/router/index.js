import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Front Layout',
    component: () => import('../views/FrontLayoutView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Dashboard Layout',
    component: () => import('../views/DashboardLayoutView.vue'),
    children: [
      {
        path: 'products',
        name: 'Admin Products',
        component: () => import('../views/admin/AdminProductsView.vue')
      },
      {
        path: 'orders',
        name: 'Admin Orders',
        component: () => import('../views/admin/AdminOrdersView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
