<script setup lang="ts">
const slug = computed(() => useRoute('tours-slug').params.slug)

const { data: tour } = await useFetch('/api/get-tour-by-slug', { query: { slug } })
const { data: tourFlights } = await useFetch('/api/get-tour-flights-by-slug', { query: { slug } })
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
                {{ flight }}
                <strong>
                  {{ flight.departureCountryName }}, {{ flight.departureCityName }} -
                  {{ tour.arrivalCountryName }}, {{ flight.arrivalCityName }}</strong
                >
              </p>
              <p style="font-size: 14px">{{ flight.departureDate }} - {{ flight.arrivalDate }}</p>
            </div>
            <div class="flight-object-price">
              <p>{{ flight.price }}р</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
.flight-object-price {
  font-size: 19px;
  font-weight: bold;
  color: rgb(3 157 3);
  text-align: right;
}
</style>
