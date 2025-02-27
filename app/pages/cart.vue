<script setup lang="ts">
const { data } = useFetch('/api/get-cart-items', { key: 'get-cart-items' })
const cartItems = computed(() => data.value?.cartItems || [])

const { user } = useUser()
watchEffect(() => {
  if (!user.value) navigateTo('/lk')
})

const updateCartItem = async (flightId: number, quantity: number) => {
  await $fetch('/api/update-cart-item', {
    method: 'POST',
    body: { flightId, quantity },
  })
  refreshNuxtData('get-cart-items')
}

const createOrder = async () => {
  await $fetch('/api/create-order', {
    method: 'POST',
  })
  await refreshNuxtData('get-cart-items')
  alert('Заказ успешно создан')
}
</script>

<template>
  <main class="body-container">
    <h1>Корзина</h1>
    <div class="cart-items">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.tour.imageUrl" />
        <p>{{ item.tour.name }}</p>
        <div class="cart-item-info">
          <span>{{ item.flight.departureDate }} — {{ item.flight.arrivalDate }}</span>
          <span
            >{{ item.departureCountry }}, {{ item.departureCity }} — {{ item.arrivalCountry }},
            {{ item.arrivalCity }}</span
          >
        </div>
        <div class="cart-item-quantity">
          <button @click="updateCartItem(item.flightId, item.quantity - 1)">-</button>
          <p>{{ item.quantity }}</p>
          <button @click="updateCartItem(item.flightId, item.quantity + 1)">+</button>
        </div>
      </div>
    </div>
    <div class="info">
      <p>Всего позиций: {{ data?.total.totalQuantity }}</p>
      <p>Сумма позиций без скидки: {{ data?.total.totalPriceWithoutDiscount }}р</p>
      <p>Скидка: {{ data?.total.totalDiscount }}р</p>
      <p>
        Сумма позиций с скидкой: <strong>{{ data?.total.totalPriceWithDiscount }}р</strong>
      </p>
      <button class="buy-button" :disabled="cartItems.length === 0" @click="createOrder">
        Купить
      </button>
    </div>
  </main>
</template>

<style scoped>
.cart-items {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.cart-item {
  display: grid;
  grid-template-columns: auto 300px 1fr max-content;
  align-items: center;
  column-gap: 20px;
  row-gap: 30px;
}

.cart-item-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cart-item-quantity {
  display: flex;
  gap: 10px;
  align-items: center;
}
img {
  height: 100px;
  width: 200px;
  object-fit: cover;
}

.buy-button {
  background: #b2c3ff;
  border: none;
  padding-inline: 20px;
  padding-block: 10px;
  border-radius: 10px;
  color: rgb(12 8 248);
  cursor: pointer;

  &:disabled {
    background: #e0e0e0;
    color: #b2c3ff;
    cursor: not-allowed;
  }
}
</style>
