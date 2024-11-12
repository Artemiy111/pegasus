<script setup lang="ts">
const departures = ref([
  'Москва',
  'Санкт-Петербург',
  'Казань',
  'Севастополь',
  'Нижний Новгород',
  'Калуга',
  'Великий Новгород',
  'Ярославль',
])

const arrivals = ref(['Анталия', 'Пхукет', 'Бали', 'Гагры', 'Сочи', 'Анапа', 'Дубай'])

const departure = ref(departures.value[0]!)
const arrival = ref(arrivals.value[0]!)
</script>

<template>
  <section>
    <div class="search">
      <form>
        <div class="search-container">
          <div class="search-where-form">
            <div>
              <p>Откуда</p>
              <select class="search-where" id="selectWhere">
                <option v-for="d in departures" :key="d" :value="d" :selected="d === departure">
                  {{ d }}
                </option>
              </select>
            </div>
            <div>
              <p>Куда</p>
              <select class="search-where" id="selectThere">
                <option v-for="a in arrivals" :key="a" :selected="a === arrival">{{ a }}</option>
              </select>
            </div>
          </div>
          <div class="search-date-form">
            <div>
              <p>Дата вылета</p>
              <input class="date-form" type="date" id="FirstDate" />
            </div>
            <div>
              <p>Дата возвращения</p>
              <input class="date-form" type="date" id="SecondDate" />
            </div>
          </div>

          <div class="search-tourist-form">
            <p>Туристы</p>
            <select id="selectPeople">
              <option selected>1 чел.</option>
              <option>2 чел.</option>
              <option>3 чел.</option>
              <option>4 чел.</option>
              <option>5 чел.</option>
              <option>6 чел.</option>
              <option>7 чел.</option>
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
