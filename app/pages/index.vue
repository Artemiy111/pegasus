<script setup lang="ts">
import * as carousel from '@zag-js/carousel'
import { normalizeProps, useMachine } from '@zag-js/vue'

const { user } = useUser()

const { data: reviews, refresh } = useFetch('/api/get-reviews')
const { data: arrivalCities } = useFetch('/api/get-cities', {
  transform: cs => cs.filter(c => c.type === 'arrival'),
})
const { data: tours } = useFetch('/api/get-tours')

const createReviewError = ref<string | null>(null)
const createReview = async (e: Event) => {
  const fd = Object.fromEntries(new FormData(e.target as HTMLFormElement))
  createReviewError.value = null
  try {
    const review = await $fetch('/api/create-review', {
      method: 'POST',
      body: JSON.stringify(fd),
    })
    refresh()
    ;(e.target as HTMLFormElement).reset()
  } catch (_e) {
    const e = _e as Error
    console.log(e)
    createReviewError.value = e.message
  }
}

const [state, send] = useMachine(carousel.machine({ id: '1' }))
const api = computed(() => carousel.connect(state.value, send, normalizeProps))
</script>

<template>
  <main class="body-container">
    <TheSearch />

    <section class="banner">
      <div class="banner-container">
        <div class="image-container-left">
          <div class="carousel" v-bind="api.getRootProps()">
            <button class="carousel-button carousel-button-prev" v-bind="api.getPrevTriggerProps()">
              <IconsLeftArrow />
            </button>
            <button class="carousel-button carousel-button-next" v-bind="api.getNextTriggerProps()">
              <IconsRightArrow />
            </button>
            <div v-bind="api.getViewportProps()" class="">
              <div v-bind="api.getItemGroupProps()" class="">
                <NuxtLink
                  v-for="(item, index) in tours || []"
                  :key="item.id"
                  v-bind="api.getItemProps({ index })"
                  :to="`/tours/${item.slug}`"
                  class="carousel-item"
                >
                  <p class="carousel-item-title">{{ item.name }}</p>
                  <img class="carousel-item-image" :src="item.imageUrl" :alt="item.name" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="image-container-right">
          <NuxtLink to="/tours">
            <img
              src="https://s01.cdn-pegast.net/get/c5/d9/5a/65be574fc1a93056bdb3d9f9b324b83f177ce5cd342433cb8c2ddf272a/PEGAS-SELECT_360%D1%85192%282%29+%281%29.png"
            />
          </NuxtLink>
          <NuxtLink to="/payments">
            <img
              src="https://s01.cdn-pegast.net/get/7c/8d/44/9aa077ebff6dd834acb1de82f2396ecdab50f96263860db46c862d71a1/pay_360%D1%85192%282%29+%281%29.png"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section>
      <div>
        <p style="padding: 10px">
          Более 45 стран мира для путешествий с вылетом из Москвы , Екатеринбурга, Казани,
          Санкт-Петербурга. Предлагаем все виды отдыха на лучших курортах мира. Организуем
          групповые, семейные, индивидуальные, корпоративные и VIP туры. Воспользуйтесь базой
          горящих туров от турагентства Пегас Туристик. Cервис турагентства Пегас Туристик позволяет
          купить и забронировать тур ОНЛАЙН. Полетные программы туроператора Pegas Touristik :
          Турция, Доминикана, Египет, Куба, Таиланд, Греция, Кипр, Италия, Испания, Тунис, ОАЭ,
          Вьетнам, Марокко, Мексика, Черногория, Мальдивы, Андорра.
        </p>
      </div>
    </section>

    <section>
      <div class="advantages-container">
        <img src="/images/advantages.png" />
      </div>
    </section>
    <section class="reviews">
      <h2>Отзывы наших клиентов</h2>
      <div class="reviews-list">
        <div v-for="r in reviews" :key="r.id" class="review-obj">
          <div class="review-obj-name">
            <p>{{ r.user.name }}, г. {{ r.originCity }}</p>
            <p>
              Ездил в
              <NuxtLink :to="`/tours?arrivalCity=${r.arrivalCity.name}`"
                >г. {{ r.arrivalCity.name }}</NuxtLink
              >
            </p>
          </div>
          <div class="" v-html="r.text"></div>
        </div>

        <div v-if="user" class="review-form-container">
          <h2>Остались впечатления? Оставьте свой отзыв</h2>
          <div class="review-form">
            <form @submit.prevent="createReview">
              <input type="text" disabled :value="user.name" placeholder="Ваше имя" />
              <input type="text" name="originCity" placeholder="Откуда вы" />
              <div class="">
                <span>Куда была путёвка</span>
                <select name="arrivalCityId" placeholder="Куда была путёвка">
                  <option v-for="a in arrivalCities" :key="a.id" :value="a.id">
                    {{ a.name }}
                  </option>
                </select>
              </div>
              <textarea name="text" placeholder="Отзыв"></textarea>
              {{ createReviewError }}
              <button class>Отправиaть</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.banner-container {
  display: grid;
  grid-template-columns: 700px 1fr;
  gap: 15px;
  height: 350px;
  width: inherit;
}
.banner-container .image-container-left {
  overflow: hidden;
  height: inherit;
  border-radius: 25px;
}

.banner-container .image-container-right {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 15px;

  & img {
    padding: 0;
    margin: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
}
.banner-container .image-container-right a {
  overflow: hidden;
  width: inherit;
  border-radius: 25px;
}

.carousel {
  position: relative;
}

.carousel-button {
  position: absolute;
  top: 50%;
  translate: 0px -50%;
  /* width: 100%; */
  z-index: 10;

  border: none;
  background: #fff;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 100px;
}

.carousel-button-prev {
  left: 20px;
}

.carousel-button-next {
  right: 20px;
}

.carousel-item {
  position: relative;
  /* width: 100%; */
  height: 350px;
}

.carousel-item-title {
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}

.carousel-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
}
.review-obj {
  overflow: hidden;

  width: 100%;
  height: 50%;
  margin: 10px 0px;
  padding: 10px;

  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.review-obj p {
  padding: 5px 5px 5px 5px;
  font-size: 17px;
}
.review-obj-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  background-color: inherit;
}
.review-obj-name p {
  margin: 0px;
  padding: 5px 5px 5px 5px;
  font-size: 17px;
  font-weight: bold;
}
.reviews h1,
h2 {
  text-align: center;
}

.review-form {
  padding: 20px 40px;
  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.review-form input,
textarea {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 30px;
  margin: 15px auto;

  font-size: 15px;
  color: #000000;
  text-align: center;

  border: 2px solid #a3a4a4;
  border-radius: 5px;

  transition: all 0.3s ease-in-out;
}
.review-form textarea {
  resize: none;
  width: 100%;
  height: 100px;
}
.review-form button {
  display: flex;
  align-items: center;

  width: 100px;
  height: 40px;
  margin: 0px auto;

  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  background-color: #60b822;
  border: none;
  border-radius: 17px;

  transition: all 0.3s ease-in-out;
}
.review-form button:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.review-form button:active {
  background-color: #448119;
}

.advantages-container {
  padding-top: 15px;
}
.advantages-container img {
  width: 1018px;
  height: 520px;
}
</style>
