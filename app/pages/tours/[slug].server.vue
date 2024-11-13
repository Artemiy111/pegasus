<script setup lang="ts">
import { eq, getTableColumns } from 'drizzle-orm'
import { db } from '~~/server/db'
import {
  tours as toursTable,
  flights as flightsTable,
  cities as citiesTable,
  countries as countriesTable,
} from '~~/server/db/schema'

const slug = useRoute('tours-slug').params.slug

const { data } = await useAsyncData('tour', () => {
  const tourFlights = db
    .select({
      ...getTableColumns(flightsTable),
      departureCity: citiesTable.name,
      departureCountry: countriesTable.name,
    })
    .from(flightsTable)
    .innerJoin(citiesTable, eq(flightsTable.departureCityId, citiesTable.id))
    .innerJoin(countriesTable, eq(citiesTable.countryId, countriesTable.id))
    .innerJoin(toursTable, eq(flightsTable.tourId, toursTable.id))
    .where(eq(toursTable.slug, slug))
  const tour = db
    .select({
      ...getTableColumns(toursTable),
      city: citiesTable.name,
      country: countriesTable.name,
    })
    .from(toursTable)
    .innerJoin(citiesTable, eq(toursTable.cityId, citiesTable.id))
    .innerJoin(countriesTable, eq(citiesTable.countryId, countriesTable.id))
    .where(eq(toursTable.slug, slug))
    .then(ts => ts[0])

  return Promise.all([tourFlights, tour])
})

const tourFlights = computed(() => data.value?.[0] ?? undefined)
const tour = computed(() => data.value?.[1] ?? undefined)
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
                  {{ flight.departureCountry }}, {{ flight.departureCity }} - {{ tour.country }},
                  {{ tour.city }}</strong
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
  flex-direction: row;

  width: 100%;
  margin: 15px;
  padding: 15px;

  background-color: rgb(219 219 219);
  border-radius: 15px;
}
.flight-object-information {
  width: 50%;
  text-align: left;
}
.flight-object-price {
  width: 100%;

  font-size: 19px;
  font-weight: bold;
  color: rgb(3 157 3);
  text-align: right;
}
</style>
