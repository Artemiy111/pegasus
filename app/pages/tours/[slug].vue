<script setup lang="ts">
const slug = computed(() => useRoute('tours-slug').params.slug)

const { user } = useUser()
const { data: tour } = await useFetch('/api/get-tour-by-slug', { query: { slug } })
const { data: tourFlights, refresh } = useFetch('/api/get-tour-flights-by-slug', {
  query: { slug },
})

const addToCart = async (flightId: number) => {
  await $fetch('/api/add-cart-item', {
    method: 'POST',
    body: { flightId },
  })
  refresh()
  refreshNuxtData('get-cart-items')
}

const updateCartItem = async (flightId: number, quantity: number) => {
  if (!tour.value) return
  await $fetch('/api/update-cart-item', {
    method: 'POST',
    body: { flightId, quantity },
  })
  refresh()
  refreshNuxtData('get-cart-items')
}
</script>

<template>
  <div class="body-container">
    <TheSearch />

    <section v-if="tour" class="tour-desc">
      <div class="tour-desc-container">
        <div class="tour-information">
          <h1>{{ tour.name }}</h1>
          <img :src="tour.imageUrl" />
          <p>
            {{ tour.description }}
          </p>
        </div>
        <div class="tour-dates">
          <h3>Туры</h3>
          <div v-for="flight in tourFlights" :key="flight.id" class="flight-object">
            <div class="flight-object-information">
              <p>
                <strong>
                  {{ flight.departureCountryName }}, {{ flight.departureCityName }} -
                  {{ tour.arrivalCountryName }}, {{ flight.arrivalCityName }}</strong
                >
              </p>
              <p style="font-size: 14px">{{ flight.departureDate }} - {{ flight.arrivalDate }}</p>
            </div>
            <div class="flight-price">
              <div class="flight-price-items">
                <p class="flight-price-only" v-if="flight.priceDiscounted === null">
                  {{ flight.price }}р
                </p>
                <template v-else>
                  <p class="flight-price-discounted">{{ flight.priceDiscounted }}р</p>
                  <p class="flight-price-before">{{ flight.price }}р</p>
                </template>
              </div>
              <div class="flight-quantity" v-if="user">
                <button
                  type="button"
                  v-if="!flight.quantityInCart"
                  @click="addToCart(flight.id)"
                  class="quantity-button"
                >
                  В корзину
                </button>
                <template v-else>
                  <button
                    type="button"
                    @click="updateCartItem(flight.id, flight.quantityInCart - 1)"
                    class="quantity-button"
                  >
                    -
                  </button>
                  <p>{{ flight.quantityInCart }}</p>
                  <button
                    type="button"
                    @click="updateCartItem(flight.id, flight.quantityInCart + 1)"
                    class="quantity-button"
                  >
                    +
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.tour-desc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tour-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  padding: 25px;

  font-size: 18px;
  background-color: azure;
  border: 1px solid gray;
  border-radius: 25px 25px 0px 0px;
}
.tour-information img {
  overflow: hidden;
  border-radius: 15px;
}
.tour-dates {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  padding: 25px;
  background-color: azure;
  border: 1px solid gray;
  border-radius: 0px 0px 25px 25px;
}
.flight-object {
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 15px;
  padding: 15px;

  background-color: rgb(219 219 219);
  border-radius: 15px;
}

.flight-price {
  display: flex;
  gap: 30px;
  align-items: center;
}

.flight-price-items {
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.flight-price-only,
.flight-price-discounted {
  font-size: 19px;
  font-weight: bold;
  color: rgb(3 157 3);
}

.flight-price-before {
  font-size: 14px;
  text-decoration: line-through;
}

.flight-quantity {
  display: flex;
  gap: 10px;
  align-items: center;
}

.quantity-button {
  background: #cfd9ff;
  border: none;
  padding-inline: 20px;
  padding-block: 10px;
  border-radius: 10px;
  color: rgb(12, 8, 248);
  cursor: pointer;
}
</style>
