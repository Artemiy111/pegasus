<script setup lang="ts">
const { user } = useUser()

const { data: reviews, refresh } = await useFetch('/api/get-reviews')

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
  } catch (_e) {
    const e = _e as Error
    console.log(e)
    createReviewError.value = e.message
  }
}
</script>

<template>
  <main class="body-container">
    <TheSearch />

    <section class="banner">
      <div class="banner-container">
        <div class="image-container-left">
          <NuxtLink to="/tours">
            <img src="/images/banner_uae_B2C.jpg" />
          </NuxtLink>
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
              Ездил в <NuxtLink to="#">г. {{ r.arrivalCity.name }}</NuxtLink>
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
              <input type="text" name="arrivalCityId" placeholder="Куда была путёвка" />
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  width: inherit;
  height: 350px;
}
.banner-container .image-container-left {
  overflow: hidden;
  width: 666px;
  height: inherit;
  border-radius: 25px;
}

.banner-container .image-container-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 340px;
  height: 100%;
}
.banner-container .image-container-right a {
  overflow: hidden;
  width: inherit;
  height: 48%;
  border-radius: 25px;
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

  width: inherit;
  width: 100%;
  height: 40%;

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
  padding: 10px;
  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.review-form input,
textarea {
  display: flex;
  flex-direction: column;

  width: 80%;
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

.callback-form-container {
  width: 50%;
  margin: 10px auto;
}

.callback-form {
  padding: 10px;
  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.callback-form input,
textarea {
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 30px;
  margin: 15px auto;

  font-size: 15px;
  color: #000000;
  text-align: center;

  border: 2px solid #a3a4a4;
  border-radius: 5px;

  transition: all 0.3s ease-in-out;
}
.callback-form textarea {
  resize: none;
  height: 100px;
}
.callback-form button {
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
.callback-form button:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.callback-form button:active {
  background-color: #448119;
}
</style>
