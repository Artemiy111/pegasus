<template>
  <main class="body-container">
    <section>
      <div class="contacts">
        <div class="contacts-information">
          <h2>Турагентство Pegas Touristik</h2>
          <p>
            Консультации, подборка, бронирование и сопровождение по турам турагентства ПЕГАС
            Туристик (PEGAS Touristik)
          </p>
          <p>
            <img src="/images/svg/Tilda_Icons_3st_round-the-clock.svg" /> ПН-ВС: 10:00 — 20:00 (МСК)
          </p>
          <p>
            <a href="tel:+78006009202">
              <img src="/images/svg/Tilda_Icons_3st_phone.svg" />
              +7 (800) 600-92-02 по России</a
            >
          </p>
          <p>
            <a href="tel:+74991307070">
              <img src="/images/svg/Tilda_Icons_3st_phone.svg" />
              +7 (499) 130-70-70 для Москвы
            </a>
          </p>
          <p>
            <NuxtLink
              external
              href="https://yandex.ru/maps/org/pegas_turistik/206089821260/reviews/?ll=37.588234%2C55.897791&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=16"
            >
              <img src="/images/svg/Tilda_Icons_3st_map.svg" />
              127349, Россия, Москва, Алтуфьевское ш., 86 корп.1 павильон 204, этаж 2
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/payments">
              <img src="/images/svg/Tilda_Icons_3st_card.svg" />
              Онлайн оплата</NuxtLink
            >
          </p>
          <p>
            <NuxtLink href="/tours">
              <img src="/images/svg/Tilda_Icons_3st_cart.svg" />
              Бронирование туров онлайн</NuxtLink
            >
          </p>
          <div class="contacts-rate-frames">
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/206089821260?type=rating"
              width="150"
              height="50"
              frameborder="0"
            ></iframe>
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/1355904141"
              width="150"
              height="50"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="contacts-picture">
          <img
            src="https://pegastk.com/wp-content/uploads/2024/09/photo_2024-09-26_16-51-17-2.jpg"
          />
        </div>
      </div>
      <div class="yandex-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=206089821260"
          width="560"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </section>
    <section>
      <div class="callback-form-container">
        <h2 style="text-align: center">Форма обратной связи</h2>
        <div class="callback-form">
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Номер телефона" />
            <input type="mail" placeholder="Почта" />
            <textarea placeholder="Ваш вопрос"></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
}
.contacts-information {
  width: 50%;
}
.contacts-information img {
  float: left;
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.contacts-information h1,
h2 {
  text-align: left;
}
.contacts-information a {
  font-size: 15px;
  color: black;
  text-decoration: none;
}
.contacts-information a:hover {
  text-decoration: underline;
}
.contacts-picture img {
  width: 372px;
  height: 500px;
  margin-top: 20px;
}
.contacts-rate-frames {
  display: flex;
  flex-direction: row;
  margin: 0px 15px;
}
.yandex-map iframe {
  width: 100%;
}
</style>
