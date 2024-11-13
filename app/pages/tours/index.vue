<script setup lang="ts">
const query = computed(() => useRoute().query)
watch(query, () => {
  console.log('aaaa', query.value)
})
const { data: tours, status } = await useFetch('/api/get-tours', {
  query: query,
})
</script>

<template>
  <div class="body-container">
    <TheSearch />

    <section class="tours-catalogue">
      <h1>Лучшие туры от ПЕГАС</h1>
      <template v-if="status === 'success'">
        <div v-if="tours?.length" class="tours-catalogue-container">
          <NuxtLink v-for="t in tours" :key="t.id" :to="`/tours/${t.slug}`">
            <div class="tour-obj">
              <div class="tour-obj-picture">
                <img :src="t.imageUrl" />
              </div>
              <div class="tour-obj-body">
                <div class="tour-price-info">
                  <p class="tour-price">От {{ t.flights.minPrice }}р</p>
                  <p>Вылет с {{ t.flights.earliestDate }}</p>
                </div>
                <div class="tour-info">
                  <p class="tour-name">{{ t.name }}</p>
                  <p class="tour-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    {{ t.arrivalCountryName }}, {{ t.arrivalCityName }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </template>
      <div v-else-if="status === 'pending'" class="">Загрузка...</div>
      <div v-else-if="status === 'error'" class="">Ошибка загрузки</div>
    </section>
  </div>
</template>

<style scoped>
.tours-catalogue-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 15px;
  gap: 15px;

  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
  & a {
    overflow: hidden;

    width: 300px;
    height: auto;

    color: rgb(0 0 0);
    text-decoration: none;

    border: 1px solid rgb(213 213 213);
    border-radius: 15px;

    transition: all 0.3s ease-in-out;
  }

  & a:hover {
    box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
  }
}

.tours-catalogue-container .tour-obj {
  width: 300px;
  height: auto;
  border-radius: 15px;
}
.tour-obj-picture {
  width: 300px;
  height: 150px;
}
.tour-obj-picture img {
  width: 300px;
  height: 150px;
}
.tour-obj-body p {
  margin: 0px;
  padding: 5px;
}
.tour-price-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 15px;
  font-weight: bold;

  background-color: rgb(227 244 248);
}
.tour-price {
  font-size: 19px;
  font-weight: bold;
  color: green;
}
.tour-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.tour-name {
  font-size: 15px;
  font-weight: bold;
}
.tour-location {
  font-size: 13px;
}
.tour-location svg {
  color: blue;
}

.not-found {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
