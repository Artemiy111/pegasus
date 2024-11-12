<template>
  <main class="body-container">
    <section>
      <div class="search">
        <form>
          <div class="search-container">
            <div class="search-where-form">
              <div>
                <p>Откуда</p>
                <select class="search-where" id="selectWhere">
                  <option selected>Москва</option>
                  <option>Санкт-Петербург</option>
                  <option>Казань</option>
                  <option>Севастополь</option>
                  <option>Нижний Новгород</option>
                  <option>Калуга</option>
                  <option>Великий Новгород</option>
                  <option>Ярославль</option>
                </select>
              </div>
              <div>
                <p>Куда</p>
                <select class="search-where" id="selectThere">
                  <option selected>Анталия</option>
                  <option>Пхукет</option>
                  <option>Бали</option>
                  <option>Гагры</option>
                  <option>Сочи</option>
                  <option>Анапа</option>
                  <option>Дубай</option>
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

    <section class="banner">
      <div class="banner-container">
        <div class="image-container-left">
          <NuxtLink to="/tours">
            <!-- <img src = "https://s01.cdn-pegast.net/get/f7/39/72/2bbcb12416ae486adfa2cc23b9330f1e005cfea01cdfac3329a442ef4a/banner_uae_B2C.jpg"/> -->
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
        <div class="review-obj">
          <div class="review-obj-name">
            <p>Дмитрий, г. Ульяновск</p>
            <p>Ездил в <a href="#">Гагры</a></p>
          </div>
          <p>
            Недавно вернулись из потрясающей поездки в Гагры, и эмоции до сих пор переполняют! Этот
            курорт удивляет своей красотой: величественные горы, лазурное море и зелень тропических
            растений создают атмосферу настоящего рая.
          </p>
          <p>
            Особую благодарность хочу выразить нашему туроператору, который организовал нашу поездку
            на высшем уровне. Все было продумано до мелочей: комфортный трансфер, уютные гостиницы и
            увлекательные экскурсии по самым живописным местам. Гид был настоящим знатоком региона,
            который делился интересными историями и местными традициями.
          </p>
          <p>
            Если вы хотите насладиться великолепием природы и гостеприимством, Гагры — идеальный
            выбор, а с этим туроператором ваше путешествие станет поистине незабываемым!
          </p>
        </div>
        <div class="review-obj">
          <div class="review-obj-name">
            <p>Иван, г.Москва</p>
            <p>Ездил на <a href="#">Бали</a></p>
          </div>
          <p>
            Недавно вернулись с незабываемой поездки на Бали, и не могу не поделиться впечатлениями!
            Это место просто волшебное: белоснежные пляжи, зеленые рисовые террасы и удивительная
            культура.
          </p>
          <p>
            Особую благодарность хочу выразить нашему туроператору, который организовал все на
            высшем уровне. Каждая деталь была продумана до мелочей: от комфортного трансфера до
            увлекательных экскурсий. Гид был настоящим профессионалом, который делился не только
            знаниями, но и своей любовью к этому прекрасному острову.
          </p>
          <p>
            Если вы мечтаете о настоящем рае на земле, обязательно выбирайте Бали и доверяйтесь
            этому замечательному туроператору! Вы не пожалеете!
          </p>
        </div>
        <div class="review-obj">
          <div class="review-obj-name">
            <p>Артемий, г.Стерлитамак</p>
            <p>Ездил в <a href="#">Анталию</a></p>
          </div>
          <p>
            Недавно вернулись из великолепной поездки в Анталию, и впечатления просто потрясающие!
            Этот курорт поразил нас своей красотой: чистейшие пляжи, прозрачное море и живописные
            горные пейзажи создают атмосферу настоящего отдыха.
          </p>
          <p>
            Особую благодарность хочу выразить нашему туроператору, который организовал все на
            высшем уровне. Каждая деталь была учтена: от комфортного трансфера до разнообразных
            экскурсий по историческим и культурным достопримечательностям. Гид был настоящим
            профессионалом, который делился интересными фактами и местными легендами.
          </p>
          <p>
            Если вы мечтаете о солнечном отдыхе с комфортом и интересными приключениями, Анталия —
            идеальный выбор, а с этим туроператором ваше путешествие станет поистине незабываемым!
          </p>
        </div>
        <div class="review-form-container">
          <h2>Остались впечатления? Оставьте свой отзыв</h2>
          <div class="review-form">
            <form>
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Откуда вы" />
              <input type="text" placeholder="Куда была путёвка" />
              <textarea placeholder="Отзыв"></textarea>
              <button class>Отправиaть</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Новый поиск */
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

.body-container {
  width: 70%;
  min-height: 700px;
  margin: 0px auto 0px auto;
}
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
/* .banner-container .image-container-left img {
  height: inherit;
  width: inherit;
} */
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
  /* margin: 0px; */
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
/* Форма обратной связи на главной странице */
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
