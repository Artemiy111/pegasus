<script setup lang="ts">
import CartIcon from './icons/CartIcon.vue'

const { user } = useUser()
const { data } = await useFetch('/api/get-cart-items', { key: 'get-cart-items' })
const totalQuantity = computed(() => data.value?.total.totalQuantity)
</script>

<template>
  <NuxtLink v-if="user" class="cart-button" to="/cart">
    <p v-if="totalQuantity" class="total-quantity">{{ totalQuantity }}</p>
    <CartIcon />
  </NuxtLink>
</template>

<style scoped>
.cart-button {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background: white;
  border: 1px solid rgb(192 192 192);
  cursor: pointer;
  border-radius: 100px;
}

.total-quantity {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  right: -5px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  border-radius: 100px;
  background: #e1e5ff;
}
</style>
