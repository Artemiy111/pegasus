<script setup lang="ts">
// const departureCities = ref([
//   'Любой',
//   'Москва',
//   'Санкт-Петербург',
//   'Казань',
//   'Севастополь',
//   'Нижний Новгород',
//   'Калуга',
//   'Великий Новгород',
//   'Ярославль',
// ])
// const arrivalCities = ref(['Любой', 'Анталия', 'Пхукет', 'Бали', 'Гагры', 'Сочи', 'Анапа', 'Дубай'])

const { data } = await useAsyncData('cities', async () => {
  const cities = await $fetch('/api/get-cities')
  const departureCities = ['Любой', ...cities.filter(c => c.type === 'departure').map(c => c.name)]
  const arrivalCities = ['Любой', ...cities.filter(c => c.type === 'arrival').map(c => c.name)]
  return { departureCities, arrivalCities }
})

const departureCities = computed(() => data.value?.departureCities || [])
const arrivalCities = computed(() => data.value?.arrivalCities || [])

const departureCity = ref(departureCities.value[0]!)
const departureDate = ref<string | null>(null)
const arrivalCity = ref(arrivalCities.value[0]!)
const arrivalDate = ref<string | null>(null)
const touristsOptions = ref([1, 2, 3, 4, 5, 6, 7])
const tourists = ref<number>(1)

const setSearchParams = () => {
  const query = useRoute().query
  departureCity.value = query.departureCity?.toString() || departureCities.value[0]!
  departureDate.value = query.departureDate?.toString() || null
  arrivalCity.value = query.arrivalCity?.toString() || arrivalCities.value[0]!
  arrivalDate.value = query.arrivalDate?.toString() || null
  tourists.value = query.tourists?.toString() ? Number(query.tourists.toString()) : 1
}
setSearchParams()

const search = async () => {
  navigateTo({
    path: '/tours',
    query: {
      departureCity: departureCity.value === 'Любой' ? '' : departureCity.value,
      departureDate: departureDate.value,
      arrivalCity: arrivalCity.value === 'Любой' ? '' : arrivalCity.value,
      arrivalDate: arrivalDate.value,
      tourists: tourists.value,
    },
  })
}
</script>

<template>
  <section>
    <div class="search">
      <form @submit.prevent="search">
        <div class="search-container">
          <div class="search-where-form">
            <div>
              <p>Откуда</p>
              <select v-model="departureCity" class="search-where" id="selectWhere">
                <option v-for="d in departureCities" :key="d" :value="d">
                  {{ d }}
                </option>
              </select>
            </div>
            <div>
              <p>Куда</p>
              <select v-model="arrivalCity" class="search-where" id="selectThere">
                <option v-for="a in arrivalCities" :key="a">{{ a }}</option>
              </select>
            </div>
          </div>
          <div class="search-date-form">
            <div>
              <p>Дата вылета от</p>
              <input
                :value="departureDate"
                @change="(e) => {
                const value = (e.target as HTMLInputElement).value
                if (!value) departureDate = null
                else departureDate = value
              }"
                class="date-form"
                type="date"
                id="FirstDate"
              />
            </div>
            <div>
              <p>Дата возвращения до</p>
              <input
                :value="arrivalDate"
                @change="(e) => {
                const value = (e.target as HTMLInputElement).value
                if (!value) arrivalDate = null
                else arrivalDate = value
              }"
                class="date-form"
                type="date"
                id="SecondDate"
              />
            </div>
          </div>

          <div class="search-tourist-form">
            <p>Туристы</p>
            <select v-model="tourists" id="selectPeople">
              <option v-for="n in touristsOptions" :key="n" :value="n">{{ n }} чел.</option>
            </select>
          </div>
          <div class="search-button">
            <button type="submit" id="searchBtn">Найти</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.search {
  width: 100%;
  margin: 15px 0px;

  font-size: 15px;

  background: rgb(71 165 252);
  border: 1px solid rgb(71 165 252);
  border-radius: 25px;
}
.search .search-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  width: inherit;
  height: inherit;
  margin: 0px auto 10px auto;
}
.search-container input,
select {
  display: flex;

  height: 50px;

  color: #000000;
  text-align: center;

  border: 2px solid #a3a4a4;
  border-radius: 25px;
  outline: none;

  transition: all 0.3s ease-in-out;
}
.search-container input:hover,
select:hover {
  background-color: rgb(235 225 225);
}
.search-container p {
  margin: 0px 0px;
  padding: 7px 0px;
  color: white;
  text-align: center;
}
.search-where-form {
  display: inherit;
  margin-right: 55px;
}
.search-where-form select {
  width: 180px;
  margin: 0px 5px 0px 5px;
  padding: 5px;
}
.search-date-form {
  display: inherit;
  margin: 0px 55px 0px 0px;
}
.search-date-form input {
  width: 120px;
  height: 46.8px;
  margin: 0px 1px 0px 5px;
}
.search-tourist-form {
  margin-right: 25px;
}
.search-tourist-form select {
  width: 100px;
}
.search-button {
  display: flex;
  align-items: flex-end;
}
.search-button button {
  width: 100px;
  height: 50px;

  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  background-color: #60b822;
  border: none;
  border-radius: 17px;

  transition: all 0.3s ease-in-out;
}
.search-button button:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.search-button button:active {
  background-color: #448119;
}
</style>
